import { addReview, fetchBootReview } from 'api';
import { BootReview } from 'api/types';

export const createReview = (review: BootReview, user: string) => dispatch => {
  addReview(review, user)
    .then(dispatch(fetchReview(review.id)))
    .catch(err => {
      throw err;
    });
};

export const receiveReview = (reviews: BootReview, id: string) => ({
  type: 'REVIEWS.RECEIVE_REVIEW',
  payload: {
    id,
    reviews,
  },
});

export const fetchReview = (id: string) => dispatch => {
  fetchBootReview(id)
    .then(reviews => {
      dispatch(receiveReview(reviews as BootReview, id));
    })
    .catch(err => {
      throw err;
    });
};
