import React from 'react';
import QuestionList from '../components/QuestionList';

const ScriptViewer = () => {
  return (
    <div className='w-screen flex justify-center items-center'>
    <div className="flex flex-col max-w-3xl p-16 gap-8">
  <h1>Penn Reflections</h1>
<p className='italic'>a scripted, gamified journey through the collective Penn Experience</p>
  <p>
    Your goal is to reach 20 points by asking strangers questions on Locust Walk. Film the entire process. Each question you ask comes with a possible point gain or loss, depending on how someone answers. You don’t know what question you’ll be asking until you choose the person.
  </p>

  <h2>Rules</h2>
  <ol>
    <li>Approach a different person for each question.</li>
    <li>Use a random question generator or printed cards to determine the next question. Feel free to use a modified set of questions than the example.</li>
    <li>Read the question to the person. Don’t explain or guide them toward an answer.</li>
    <li>Score the answer based on the key provided.</li>
    <li>You can only ask one question per person.</li>
    <li>First person to reach 20 points wins.</li>
  </ol>

  <h2>How to Play</h2>
  <ol>
    <li>Stop someone on Locust and ask if they’re willing to answer one question for a project.</li>
    <li>Generate a question and ask it out loud.</li>
    <li>Record their answer and tally your score.</li>
    <li>Move on to the next person.</li>
    <li>Repeat until you hit 20 points.</li>
  </ol>

  <h2>Question List</h2>
  <QuestionList/>

    </div>
    </div>
  );
};

export default ScriptViewer;