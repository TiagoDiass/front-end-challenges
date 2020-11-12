import Head from 'next/head';
import Image from 'next/image';
import { QuestionsBlock } from '../components';
import {
  FullPageContainer,
  FaqBlock,
  FaqLeftBlock,
  FaqRightBlock,
} from '../pagesElements/Faq.elements';
import questions from '../questionsAndAnswers';

export default function Home() {
  return (
    <>
      <Head>
        <title>FAQ | Frequently Asked Questions</title>
      </Head>
      <FullPageContainer>
        <FaqBlock>
          <FaqRightBlock>
            <img
              className="illustration-box"
              src="https://raw.githubusercontent.com/TiagoDiass/front-end-challenges/431c50b041c2ef6d65f9f2447dc5eaf5f5ff4d48/faq-card/public/images/illustration-box-desktop.svg"
            />

            <h1>FAQ | Frequently Asked Questions</h1>

            <QuestionsBlock questions={questions} />
          </FaqRightBlock>
        </FaqBlock>
      </FullPageContainer>
    </>
  );
}
