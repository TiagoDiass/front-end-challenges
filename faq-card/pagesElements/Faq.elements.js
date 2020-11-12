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
  width: 70%;
  min-height: 550px;
  background-color: #fff;
  border-radius: 1.4rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  display: flex;

  @media screen and (max-width: 620px) {
    width: 90%;
  }
`;

// Main part of the FAQ Block
export const FaqRightBlock = styled.div`
  width: 100%;
  padding: 3.2rem 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 700;
    font-size: 2.5rem;
  }

  img.illustration-box {
    width: 140px;
    float: right;
    margin-top: -5rem;
    margin-right: -5rem;
  }

  @media screen and (max-width: 620px) {
    h1 {
      font-size: 2.1rem;
    }
  }
`;
