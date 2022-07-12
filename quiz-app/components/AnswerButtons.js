import { useState } from "react";
import { answerOptions } from "../lib/quizData";

export default function AnswerButtons({ question, onChange }) {
  const [value, setValue] = useState("Agree");

  return (
    <>
      {answerOptions.map((buttonType) => {
        if(value === buttonType)  {(
          <span key={question + buttonType}>
            <input
              className="bg-red-600"
              type="radio"
              name={question}
              key={question + buttonType}
              id={question + buttonType}
              value={buttonType}
              onClick={() => {
                setValue(buttonType);
                onChange(buttonType);
              }}
            />
            <label htmlFor={question + buttonType}>{buttonType}</label>
          </span>
        ) }else {(
          <span key={question + buttonType}>
            <input
              className="bg-blue-600"
              type="radio"
              name={question}
              key={question + buttonType}
              id={question + buttonType}
              value={buttonType}
              onClick={() => {
                setValue(buttonType);
                onChange(buttonType);
              }}
            />

            <label htmlFor={question + buttonType}>{buttonType}</label>
          </span>
        );
      })}
    </>
  );
}
