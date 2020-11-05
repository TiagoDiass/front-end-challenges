import React from 'react';
import {
  TestimonialWrapper,
  AuthorRow,
  AuthorImage,
  AuthorNameAndSubtitleWrapper,
  AuthorName,
  AuthorSubtitle,
} from './TestimonialBlock.elements';

const TestimonialBlock = ({
  author,
  testimonial,
  gridColumn,
  gridRow,
  backgroundColor,
  imageBorderColor,
  lightText,
}) => {
  return (
    <TestimonialWrapper
      backgroundColor={backgroundColor}
      gridColumn={gridColumn}
      gridRow={gridRow}
    >
      <AuthorRow>
        <AuthorImage
          src={author.imagePath}
          imageBorderColor={imageBorderColor}
        />
        <AuthorNameAndSubtitleWrapper>
          <AuthorName lightText={lightText}>{author.name}</AuthorName>
          <AuthorSubtitle>{author.subtitle}</AuthorSubtitle>
        </AuthorNameAndSubtitleWrapper>
      </AuthorRow>
    </TestimonialWrapper>
  );
};

export default TestimonialBlock;
