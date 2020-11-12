import React, { useState } from 'react';
import Image from 'next/image';
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
        <Image
          className={active && 'rotate'}
          onClick={collapseQuestion}
          src="/images/icon-arrow-down.svg"
          width={20}
          height={3}
        />
      </QuestionTitleWrapper>
      {active && <QuestionAnswer>{question.answer}</QuestionAnswer>}
    </QuestionRowWrapper>
  );
};

export default QuestionRow;
