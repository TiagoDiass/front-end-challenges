import styled from 'styled-components/macro';

export const MainWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestimonialsWrapper = styled.main`
  width: 1100px;
  height: 70%;
  min-height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.4rem;

  @media (max-width: 1090px) {
    width: 980px;
  }

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    padding: 1rem 0;
  }
`;
