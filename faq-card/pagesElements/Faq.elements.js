import styled from 'styled-components';

export const FullPageContainer = styled.section`
  background: linear-gradient(
    ${({ theme }) => theme.colors.softViolet},
    ${({ theme }) => theme.colors.softBlue}
  );
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FaqBlock = styled.main`
  width: 60%;
  min-height: 550px;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  display: flex;
`;

export const FaqLeftBlock = styled.div`
  background-color: tomato;
  width: 50%;
`;

// Main part of the FAQ Block
export const FaqRightBlock = styled.div`
  width: 50%;
  padding: 3.2rem 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
    font-size: 2.5rem;
  }
`;
