const ReviewsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REVIEWS.RECEIVE_REVIEW':
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default ReviewsReducer;
