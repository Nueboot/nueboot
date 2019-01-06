import { BootReview } from 'api/types';
import React from 'react';
import styled from 'styled-components';
import Review from '../Review';
import ReviewForm from '../ReviewForm';
import { Button, Heading } from '../Styled';

export interface Props {
  readonly id: string;
}

interface ReviewsState {
  showForm: boolean;
}

export interface StateProps {
  reviews: BootReview[];
  currentUser: string;
}

export interface DispatchProps {
  submitReview(reivew: BootReview, user: string): void;
  getReviews(id: string): void;
}

export type ReviewsProps = Props & StateProps & DispatchProps;

export default class Reviews extends React.Component<
  ReviewsProps,
  ReviewsState
> {
  public state: ReviewsState = {
    showForm: false,
  };

  public componentDidMount() {
    this.getReviews();
  }

  public render() {
    return (
      <section className="Reviews">
        <Section>
          <StyledHeading size={2}>Reviews</StyledHeading>
          <Button onClick={this.showForm}>New Review</Button>
        </Section>
        {this.state.showForm && (
          <ReviewForm onFormSubmit={this.onFormSubmit} bootId={this.props.id} />
        )}
        {this.props.reviews.map(review => (
          <Review key={review.id} {...review} />
        ))}
      </section>
    );
  }

  private showForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  private getReviews() {
    this.props.getReviews(this.props.id);
  }

  private onFormSubmit = (review: BootReview) => {
    this.props.submitReview(review, this.props.currentUser);
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
