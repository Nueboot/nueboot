import React from 'react';
import styled from 'styled-components';
import ReviewForm from '../ReviewForm';
import { Button, Heading } from '../Styled';

export interface ReviewsProps {
  readonly id: string;
}

interface ReviewsState {
  showForm: boolean;
}

export default class Reviews extends React.Component<
  ReviewsProps,
  ReviewsState
> {
  public state: ReviewsState = {
    showForm: false,
  };

  public render() {
    return (
      <section className="Reviews">
        <Section>
          <StyledHeading size={2}>Reviews</StyledHeading>
          <Button onClick={this.showForm}>New Review</Button>
        </Section>
        {this.state.showForm && <ReviewForm />}
      </section>
    );
  }

  private showForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };
}

const StyledHeading = styled(Heading)`
  margin: 0;
  line-height: 1.5rem;
`;

const Section = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
