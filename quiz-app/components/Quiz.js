import { useState } from "react";
import Question from "./Question";
import { questionsArray, heroStages, answerOptions } from "../lib/quizData";

// key needs to be on the looped elements - the parent element

export default function Quiz() {
  //programatically generates an array of length questionsArray and fills with null values.
  const [answers, setAnswers] = useState(
    Array(questionsArray.length).fill(null)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [finalAnswer, setFinalAnswer] = useState("");

  const handleChange = (index, buttonType) => {
    setAnswers(
      answers.map((buttonTypeElement, elementIndex) =>
        elementIndex === index ? buttonType : buttonTypeElement
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const answerArray = [...answers];
    //const sortedArray = answerArray.sort((a, b) => b - a);
    const mostOccuring = answerArray.reduce((previous, current, i, arr) =>
      arr.filter((item) => item === previous).length >
      arr.filter((item) => item === current).length
        ? previous
        : current
    );

    console.log(mostOccuring);

    setIsSubmitted(true);
    setFinalAnswer(getFinalAnswer(mostOccuring));
  };
  const getFinalAnswer = (mostOccuring) => {
    switch (mostOccuring) {
      case answerOptions[0]:
        return "First String";

      case answerOptions[1]:
        return "Second String";

      case answerOptions[2]:
        return "Third string";

      case answerOptions[3]:
        return "Fourth String";

      case answerOptions[4]:
        return "Fifth String";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ol>
        {questionsArray.map((questionText, index) => (
          <li key={index.toString()}>
            <Question
              question={questionText}
              onChange={(buttonType) =>
                handleChange(index, buttonType)
              }></Question>
          </li>
        ))}
      </ol>
      <input className="cursor-pointer" type="submit" />
      <p>{isSubmitted ? finalAnswer : null}</p>
    </form>
  );
}

/* 
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
*/
/* 
switch statement takes in mostOccuring 
gives us back result that aligns with mostOccuring value
want to render text conditionally based on that return 
want to prevent users from pressing submit before the entire form has been filled in,

do we want to:
- send to another page?
- work on a toggle which renders a result, and then send to another page after mvp ? 
*/

/* NEXT STEPS
- conditionally render result of mostOccuring

- Create a state for isSubmitted which begins as null
- When submit button is clicked change isSubmitted to true
- When isSubmitted is true render an answer (try using handlesubmit)



- lib.js make object with k/v pair of {buttonType: heros journey}
- import into quiz and use object to conditionally render result on browser
   = our logic for generating results is DONE 
*/
