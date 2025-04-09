import React from 'react';

const questions = [
  {
    text: "Is it more important to you to be respected or to be liked?",
    values: "Respected: +1, Liked: -3",
  },
  {
    text: "Is college more about education or networking for you?",
    values: "Networking: +1, Education: -3",
  },
  {
    text: "Would you rather relive your best day in college or fast-forward past your worst one?",
    values: "Relive: +1, Fast-forward: -3",
  },
  {
    text: "Would you rather take a risk and fail or play it safe and never know?",
    values: "Risk + fail: +1, Safe + not know: -3",
  },
  {
    text: "How many close friends do you feel you can truly rely on?",
    values: "5 and below: +1, Above 5: -3",
  },
  {
    text: "On a scale of 1-10, how often do you feel overwhelmed by responsibilities?",
    values: "5-10: +1, 1-5: -3",
  },
  {
    text: "Did you feel genuinely happy and content sometime this week?",
    values: "Yes: +1, No: -3",
  },
  {
    text: "If you could go back in time, would you choose a different path for yourself?",
    values: "Yes: +1, No: -3",
  },
  {
    text: "Would you rather always be the smartest person in the room or the most liked?",
    values: "Smartest: +1, Most liked: -3",
  },
  {
    text: "Do you believe personal growth comes more from making mistakes or from making the right choices?",
    values: "Right choices: +1, Mistakes: -3",
  },
  {
    text: "Do you believe it’s better to have loved and lost or to have never loved at all?",
    values: "Loved: +1, Never love: -3",
  },
  {
    text: "On a scale of 1-10, how much of your life feels like it’s under your control right now?",
    values: "5-10: +1, 1-5: -3",
  },
  {
    text: "If you could relive one year of your life, which age would you choose?",
    values: "16–23: +1, 0–15 yrs: -3",
  },
  {
    text: "If you could start over, would you still choose Penn?",
    values: "Yes: +1, No: -3",
  },
  {
    text: "Do you think Penn’s competitive culture has changed the way you see yourself?",
    values: "No: +1, Yes: -3",
  },
  {
    text: "Do you think Penn students are more stressed about their GPAs or their LinkedIn profiles?",
    values: "GPAs: +1, LinkedIn: -3",
  },
  {
    text: "On a scale of 1-10, how much do you feel like you belong at Penn?",
    values: "6-10: +1, 1-5: -3",
  },
  {
    text: "If college ended tomorrow, would you feel satisfied with how you spent your time here?",
    values: "No: +1, Yes: -3",
  },
  {
    text: "Would you rather be remembered for your achievements or for the way you made people feel?",
    values: "Feel: +1, Achievements: -3",
  },
  {
    text: "Do you think it’s more valuable to be mentored or to mentor someone else?",
    values: "Mentor: +1, Mentored: -3",
  },
  {
    text: "If you had to describe your Penn experience as either a marathon or a rollercoaster, which would it be?",
    values: "Rollercoaster: +1, Marathon: -3",
  },
  {
    text: "Would you rather be highly successful but always anxious or content but unknown?",
    values: "Successful: +1, Content: -3",
  },
  {
    text: "Do you think it’s harder to accept failure or to accept imperfection?",
    values: "Failure: +1, Imperfection: -3",
  },
  {
    text: "Have you ever wondered who you’d be if you weren’t at Penn?",
    values: "Yes: +1, No: -3",
  },
  {
    text: "Do you think you’ll ever reach a point where you feel truly satisfied with what you’ve achieved?",
    values: "No: +1, Yes: -3",
  },
  {
    text: "Would you rather have external validation or internal fulfillment?",
    values: "Internal: +1, External: -3",
  },
  {
    text: "Do you think success is more about hard work or being in the right place at the right time?",
    values: "Right place: +1, Hard work: -3",
  },
  {
    text: "Would you rather be seen as hardworking but replaceable or lazy but one-of-a-kind?",
    values: "Lazy: +1, Hardworking: -3",
  },
  {
    text: "Would you rather let go of your expectations for yourself or other people’s expectations of you?",
    values: "Others: +1, Yourself: -3",
  },
  {
    text: "Would you rather achieve everything but never feel satisfied or achieve less but feel fulfilled?",
    values: "Achieve less: -3, Achieve everything: +1",
  },
  {
    text: "Would you rather be known as a genius with no emotional intelligence or deeply wise but intellectually average?",
    values: "Wise: +1, Genius: -3",
  },
  {
    text: "Would you rather have certainty in your future or the freedom to explore endlessly?",
    values: "Freedom: +1, Certainty: -2",
  },
];

const QuestionList = () => {
  return (
    <ul>
      {questions.map((q, i) => (
        <li key={i} className="relative group text-gray-800">
          {q.text}
          <span className="block text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {q.values}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default QuestionList;
