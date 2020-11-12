import React from 'react';
import { QuestionsBlockWrapper } from './QuestionBlock.elements';
import { QuestionRow } from '../index';

const QuestionBlock = ({ questions = [] }) => {
  return (
    <QuestionsBlockWrapper>
      {questions.map((question, index) => (
        <QuestionRow question={question} key={index} />
      ))}
    </QuestionsBlockWrapper>
  );
};

export default QuestionBlock;
