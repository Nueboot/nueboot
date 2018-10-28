import React from 'react';

export interface ReviewFormState {
  body: string;
}

class ReviewForm extends React.Component<{}, ReviewFormState> {
  // private state = { body: '' };
  public render() {
    return <div>hi</div>;
  }
}

export default ReviewForm;
