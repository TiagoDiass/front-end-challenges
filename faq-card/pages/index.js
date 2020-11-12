import Head from 'next/head';
import {
  FullPageContainer,
  FaqBlock,
  FaqLeftBlock,
  FaqRightBlock,
} from '../pagesElements/Faq.elements';

export default function Home() {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <FullPageContainer>
        <FaqBlock>
          <FaqLeftBlock>
            <h2>LEFT BLOCK</h2>
          </FaqLeftBlock>
          <FaqRightBlock>
            <h1>FAQ</h1>
          </FaqRightBlock>
        </FaqBlock>
      </FullPageContainer>
    </>
  );
}
