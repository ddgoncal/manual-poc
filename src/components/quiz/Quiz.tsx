import { quizQuestions } from "@/constants";
import styles from "./Quiz.module.css";
import React, { SetStateAction, useState } from "react";
import { Button } from "@mui/material";

interface QuizProps {
  setTakeQuiz: (value: SetStateAction<boolean>) => void;
}

type Answer = {
  questionId: number;
  answer: string;
  isRejection?: boolean;
};

const Quiz : React.FC<QuizProps> = ({ setTakeQuiz }) => {
    const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
    const [QuizResultsText, setQuizResultsText] = useState<string>("");
    const [currentQuizStep, setCurrentQuizStep] = useState(0);
    //last step is the result
    const numberOsSteps = quizQuestions["questions"].length;
    const questions = quizQuestions["questions"];

    // This method will be called after the user clicks on last "Next" button
    // It will check if any of the users answers are rejectables for the onboarding
    const checkResults = () => {
      let isCorrect = selectedAnswers.every((answer) => answer.isRejection === false);
      if (isCorrect) {
          setQuizResultsText("You got all the answers right! You're a genius!")
      } else {
          setQuizResultsText("You got some answers wrong! Try again!")
      }
        setCurrentQuizStep((prevStep) => prevStep + 1);
      ;
    }

    // This method will be called when the user clicks on the "Next" button
    // It will increment the currentQuizStep by 1
    const handleNextStep = () => {
      if (currentQuizStep < numberOsSteps - 1) {
        setCurrentQuizStep((prevStep) => prevStep + 1);
      }
      if (currentQuizStep === numberOsSteps - 1) {
        checkResults();
      }
    }

     const handlePreviousStep = () => {
         if (currentQuizStep > 0) {
             setCurrentQuizStep((prevStep) => prevStep - 1);
         } else {
            setTakeQuiz(false);
        }
     };

     // This method answers the questions and saves the answer in the selectedAnswers array
     // It will save the answer, the questionId and if the answer is a rejection
     const handleAnswerSelect = (questionId: number, answer: string, isRejection: boolean) => {
         setSelectedAnswers((prevAnswers) => {
             const newAnswers = [...prevAnswers];
             const questionIndex = newAnswers.findIndex(
                 (answerObj) => answerObj.questionId === questionId
             );
             if (questionIndex === -1) {
                 newAnswers.push({ questionId, answer, isRejection });
             } else {
                 newAnswers[questionIndex] = { questionId, answer, isRejection };
            }
             return newAnswers;
         });
     };

    return (
      <div>
        <h1 className={styles.title}>Onboarding Quiz</h1>
        {currentQuizStep === numberOsSteps && (
          <div className={styles.progress_bar}>
            <p>{QuizResultsText}</p>
          </div>
        )}
        {currentQuizStep !== numberOsSteps && (
          <>
            <div>
              <h3>{questions[currentQuizStep]["question"]}</h3>
                {questions[currentQuizStep].options.map((option) => (
                  <div className={styles.option_wrapper} key={option.value.toString()}>
                    <label>
                      <input
                        type="radio"
                        name={`${option.display}`}
                        value={option.value.toString()}
                        checked={
                            selectedAnswers.find(
                                (answer) =>
                                    answer.questionId === currentQuizStep && answer.answer === option.value.toString()
                            ) !== undefined
                        }
                        onChange={() => handleAnswerSelect(currentQuizStep, option.value.toString(), option.isRejection)}
                      />
                      {option.display.includes('<img') ? (
                      <div dangerouslySetInnerHTML={{ __html: option.display }} />
                      ) : (
                          option.display
                      )}
                    </label>
                  </div>
                ))}
            </div>
            <div className={styles.buttons_container}>
              <Button variant="contained" onClick={handlePreviousStep}>Previous</Button>
              <Button variant="contained" color="primary" disabled={selectedAnswers.find((answer) => answer.questionId === currentQuizStep) === undefined} onClick={handleNextStep}>Next</Button>
            </div>
          </>
        )};
      </div>
    );
};

export default Quiz;
