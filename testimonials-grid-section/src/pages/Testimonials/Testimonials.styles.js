import styled from 'styled-components';

export const MainWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TestimonialsWrapper = styled.main`
  border: 1px solid black;
  width: 70%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
