'use client'
import { useState } from 'react';

const questions = [
  { text: 'Is it more important to you to be respected or to be liked?', options: [ { label: 'Respected', value: 1 }, { label: 'Liked', value: -3 } ] },
  { text: 'Is college more about education or networking for you?', options: [ { label: 'Networking', value: 1 }, { label: 'Education', value: -3 } ] },
  { text: 'Would you rather relive your best day in college or fast-forward past your worst one?', options: [ { label: 'Relive your best day', value: 1 }, { label: 'Fast-forward', value: -3 } ] },
  { text: 'Would you rather take a risk and fail or play it safe and never know?', options: [ { label: 'Risk + fail', value: 1 }, { label: 'Safe + not know', value: -3 } ] },
  { text: 'How many close friends do you feel you can truly rely on?', options: [ { label: 'Above 5', value: -3 }, { label: '5 and below', value: 1 } ] },
  { text: 'On a scale of 1-10, how often do you feel overwhelmed by responsibilities?', options: [ { label: '1-5', value: -3 }, { label: '5-10', value: 1 } ] },
  { text: 'Did you feel genuinely happy and content sometime this week?', options: [ { label: 'Yes', value: 1 }, { label: 'No', value: -3 } ] },
  { text: 'If you could go back in time, would you choose a different path for yourself?', options: [ { label: 'Yes', value: 1 }, { label: 'No', value: -3 } ] },
  { text: 'Would you rather always be the smartest person in the room or the most liked?', options: [ { label: 'Smartest', value: 1 }, { label: 'Most liked', value: -3 } ] },
  { text: 'Do you believe personal growth comes more from making mistakes or from making the right choices?', options: [ { label: 'Mistakes', value: -3 }, { label: 'Right choices', value: 1 } ] },
  { text: 'Do you believe it’s better to have loved and lost or to have never loved at all?', options: [ { label: 'Loved', value: 1 }, { label: 'Never love', value: -3 } ] },
  { text: 'On a scale of 1-10, how much of your life feels like it’s under your control right now?', options: [ { label: '5-10', value: 1 }, { label: '1-5', value: -3 } ] },
  { text: 'If you could relive one year of your life, which age would you choose?', options: [ { label: '0-15 yrs', value: -3 }, { label: '16 - 23', value: 1 } ] },
  { text: 'If you could start over, would you still choose Penn?', options: [ { label: 'Yes', value: 1 }, { label: 'No', value: -3 } ] },
  { text: 'Do you think Penn’s competitive culture has changed the way you see yourself?', options: [ { label: 'Yes', value: -3 }, { label: 'No', value: 1 } ] },
  { text: 'Do you think Penn students are more stressed about their GPAs or their LinkedIn profiles?', options: [ { label: 'GPAs', value: 1 }, { label: 'LinkedIn', value: -3 } ] },
  { text: 'On a scale of 1-10, how much do you feel like you belong at Penn?', options: [ { label: '1-5', value: -3 }, { label: '6-10', value: 1 } ] },
  { text: 'If college ended tomorrow, would you feel satisfied with how you spent your time here?', options: [ { label: 'Yes', value: -3 }, { label: 'No', value: 1 } ] },
  { text: 'Would you rather be remembered for your achievements or for the way you made people feel?', options: [ { label: 'Achievements', value: -3 }, { label: 'Feel', value: 1 } ] },
  { text: 'Do you think it’s more valuable to be mentored or to mentor someone else?', options: [ { label: 'Mentored', value: -3 }, { label: 'Mentor', value: 1 } ] },
  { text: 'If you had to describe your Penn experience as either a marathon or a rollercoaster, which would it be?', options: [ { label: 'Marathon', value: -3 }, { label: 'Rollercoaster', value: 1 } ] },
  { text: 'Would you rather be highly successful but always anxious or content but unknown?', options: [ { label: 'Successful', value: 1 }, { label: 'Content', value: -3 } ] },
  { text: 'Do you think it’s harder to accept failure or to accept imperfection?', options: [ { label: 'Failure', value: 1 }, { label: 'Imperfection', value: -3 } ] },
  { text: 'Have you ever wondered who you’d be if you weren’t at Penn?', options: [ { label: 'Yes', value: 1 }, { label: 'No', value: -3 } ] },
  { text: 'Do you think you’ll ever reach a point where you feel truly satisfied with what you’ve achieved?', options: [ { label: 'Yes', value: -3 }, { label: 'No', value: 1 } ] },
  { text: 'Would you rather have external validation (awards, prestige, recognition) or internal fulfillment (joy, meaning, peace)?', options: [ { label: 'External', value: -3 }, { label: 'Internal', value: 1 } ] },
  { text: 'Do you think success is more about hard work or being in the right place at the right time?', options: [ { label: 'Hard work', value: -3 }, { label: 'Right place', value: 1 } ] },
  { text: 'Would you rather be seen as hardworking but replaceable or lazy but one-of-a-kind?', options: [ { label: 'Hardworking', value: -3 }, { label: 'Lazy', value: 1 } ] },
  { text: 'If you had to pick, would you rather let go of your expectations for yourself or other people’s expectations of you?', options: [ { label: 'Yourself', value: -3 }, { label: 'Others', value: 1 } ] },
  { text: 'If you had to choose, would you rather achieve everything you ever wanted but never feel satisfied or achieve less but feel deeply fulfilled?', options: [ { label: 'Achieve everything', value: 1 }, { label: 'Achieve less', value: -3 } ] },
  { text: 'Would you rather be known as a genius with no emotional intelligence or deeply wise but intellectually average?', options: [ { label: 'Genius', value: -3 }, { label: 'Wise', value: 1 } ] },
  { text: 'Would you rather have certainty in your future or the freedom to explore endlessly?', options: [ { label: 'Certainty', value: -2 }, { label: 'Freedom', value: 1 } ] },
];

const Quiz = () => {
    const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
    const [showScore, setShowScore] = useState(false);
  
    const handleAnswer = (questionIdx: number, value: number) => {
      const updatedAnswers = [...answers];
      updatedAnswers[questionIdx] = value;
      setAnswers(updatedAnswers);
    };
  
    const handleSubmit = () => {
      setShowScore(true);
    };
  
    const totalScore = answers.reduce((sum, val) => (sum ?? 0) + (val ?? 0), 0);
  
    return (
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="mb-4">questions</h2>
        {showScore ? (
          <div className="">
            your score is: <span className="font-semibold">{totalScore}</span>
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((q, idx) => (
              <div key={idx} className="p-4">
                <p className="mb-2">{q.text}</p>
                <div className="space-x-4">
                  {q.options.map((opt, i) => {
                    const isSelected = answers[idx] === opt.value;
                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(idx, opt.value)}
                        className={`px-3 py-1 rounded transition-colors duration-200 ${
                          isSelected
                            ? 'bg-gray-400 text-white'
                            : 'bg-gray-700 text-white hover:bg-red-700'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="mt-6 bg-red-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default Quiz;
  