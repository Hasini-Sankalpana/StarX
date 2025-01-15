import React, { useState } from 'react';
import questions from '../assets/Quize';

function getRandomQuestions(num) {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

function Quiz() {
  const [currentQuestions, setCurrentQuestions] = useState(getRandomQuestions(7));
  const [answers, setAnswers] = useState(Array(7).fill(null));
  const [score, setScore] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = answer;
    setAnswers(newAnswers);
    setCurrentIndex(currentIndex + 1);
  };

  const calculateScore = () => {
    const newScore = answers.reduce((acc, answer, index) => {
      return answer === currentQuestions[index].answer ? acc + 1 : acc;
    }, 0);
    setScore(newScore);
  };

  return (
    <div className="bg-[#150520] py-10 px-5 md:px-20 sm:px-14 min-h-screen flex flex-col justify-center items-center" id='quiz'>
      <h2 className="text-white text-4xl font-bold text-center pt-10 pb-20 mb-10 uppercase font-roboto tracking-wide">
        Test Your Space Knowledge!
      </h2>
      {score === null ? (
        <div className="flex flex-col items-center w-full lg:w-[80%] xl:w-[70%] gap-10"> 
          {currentIndex < currentQuestions.length ? (
            <div className="bg-[#2d0c3fb4] p-10 rounded-lg shadow-lg mb-10 w-full max-w-4xl">
              <h3 className="text-white text-2xl mb-14">{currentIndex + 1}. {currentQuestions[currentIndex].question}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"> 
                {currentQuestions[currentIndex].options.map((option, i) => (
                  <button
                    key={i}
                    className="bg-gradient-to-r from-[#401459] to-[#9333ea] text-white px-8 py-4 rounded-lg hover:from-[#8752ba] hover:to-[#551c8e] transition duration-300 w-full transform hover:scale-105"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-white text-2xl text-center">
              <button
                className="bg-gradient-to-r from-[#78218e] to-[#1b002e] text-white px-8 py-4 rounded-lg shadow-lg mt-10"
                onClick={calculateScore}
              >
                Submit Answers
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#2d0c3fb4] p-6 rounded-lg shadow-lg mb-10 w-full max-w-2xl">
          <div className="text-white text-2xl text-center">
            <h3 className="mb-5">Your Score: {score} out of {currentQuestions.length}</h3>
            <button
              className="bg-gradient-to-r from-[#8a28a5] to-[#4b058c] text-white px-8 py-4 rounded-lg shadow-lg mt-5"
              onClick={() => {
                setCurrentQuestions(getRandomQuestions(7));
                setAnswers(Array(7).fill(null));
                setScore(null);
                setCurrentIndex(0);
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
