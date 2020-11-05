import React from 'react';
import TestimonialsData from './Testimonials.data';
import { MainWrapper, TestimonialsWrapper } from './Testimonials.styles';
import { TestimonialBlock } from '../../components';

const Testimonials = () => {
  return (
    <MainWrapper>
      <TestimonialsWrapper>
        {TestimonialsData.map((testimonial, index) => (
          <TestimonialBlock {...testimonial} key={index} />
        ))}
      </TestimonialsWrapper>
    </MainWrapper>
  );
};

export default Testimonials;
