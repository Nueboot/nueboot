import { Button } from 'components/Styled';
import React from 'react';
import styled from 'styled-components';

import { BootReview } from 'api/types';
import Rating from './StarRating';

export interface ReviewFormProps {
  bootId: string;
  onFormSubmit(review: Partial<BootReview>): void;
}

export interface ReviewFormState {
  body: string;
  stars: number;
}

class ReviewForm extends React.Component<ReviewFormProps, ReviewFormState> {
  public state = {
    body: '',
    stars: 1,
  };

  public render() {
    return (
      <div>
        <Form>
          <label htmlFor="body">Review</label>
          <TextInput
            name="body"
            type="text"
            onChange={this.onBodyChange}
            value={this.state.body}
            required
          />
          <Rating onClick={this.onStarChange} />
        </Form>
        <Button onClick={this.onFormSubmit} value="submit">
          Submit
        </Button>
      </div>
    );
  }

  private onBodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      body: e.target.value,
    });
  };

  private onStarChange = (stars: number) => {
    this.setState({
      stars,
    });
  };

  private onFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onFormSubmit({
      body: this.state.body,
      stars: this.state.stars,
      id: this.props.bootId,
    });
  };
}

export default ReviewForm;

const TextInput = styled.input`
  border: 1px solid slategray;
  padding: 3px;
  flex: 1;
  margin-right: 10px;
  :focus {
    border-bottom-width: 1px;
    border-bottom-color: slategrey;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;
