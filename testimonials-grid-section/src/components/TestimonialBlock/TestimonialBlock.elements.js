import styled from 'styled-components/macro';

export const TestimonialWrapper = styled.article`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 0.7rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
  padding: 1.6rem;
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const AuthorImage = styled.img`
  width: 2.75rem;
  border-radius: 50%;
  border: 2px solid ${({ imageBorderColor }) => imageBorderColor};
  margin-right: 1rem;
`;

export const AuthorNameAndSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AuthorName = styled.h3`
  font-weight: 500;
  font-size: 1.4rem;
  color: ${({ lightText }) =>
    lightText ? 'var(--white)' : 'var(--grayish-blue)'};
`;

export const AuthorSubtitle = styled.p`
  color: var(--light-gray);
`;

export const TestimonialTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-top: 1rem;
`;

export const TestimonialTitle = styled.h5`
  font-size: 1.35rem;
  letter-spacing: 1.2px;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? 'var(--white)' : 'var(--grayish-blue)'};
`;

export const TestimonialText = styled.p``;
