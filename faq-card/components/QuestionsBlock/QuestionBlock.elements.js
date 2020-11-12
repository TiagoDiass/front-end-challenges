import styled from 'styled-components';

export const QuestionsBlockWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  & > div {
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`;
