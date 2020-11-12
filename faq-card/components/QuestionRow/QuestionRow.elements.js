import styled from 'styled-components';

export const QuestionRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const QuestionTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.6rem 0;

  h3 {
    transition: all 0.2s ease;

    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  }

  img {
    cursor: pointer;
    transition: transform 0.4s ease;

    &.rotate {
      transform: rotate(180deg);
    }
  }
`;

export const QuestionAnswer = styled.p`
  width: 100%;
  padding: 0.7rem 0;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.normalGray};
`;
