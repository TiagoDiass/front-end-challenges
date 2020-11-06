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
  width: 1000px;
  height: 70%;
  min-height: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1.4rem;

  @media (max-width: 1050px) {
    padding: 0 1rem;
  }
`;
