import React, { useState } from 'react';
import {
  QuestionRowWrapper,
  QuestionTitleWrapper,
  QuestionAnswer,
} from './QuestionRow.elements';

const QuestionRow = ({ question }) => {
  const [active, setActive] = useState(false);

  const collapseQuestion = () => {
    setActive(!active);
  };

  return (
    <QuestionRowWrapper>
      <QuestionTitleWrapper active={active}>
        <h3>{question.question}</h3>
        <img
          className={active && 'rotate'}
          onClick={collapseQuestion}
          src="https://raw.githubusercontent.com/TiagoDiass/front-end-challenges/431c50b041c2ef6d65f9f2447dc5eaf5f5ff4d48/faq-card/public/images/icon-arrow-down.svg"
          width={20}
          height={3}
        />
      </QuestionTitleWrapper>
      {active && <QuestionAnswer>{question.answer}</QuestionAnswer>}
    </QuestionRowWrapper>
  );
};

export default QuestionRow;
