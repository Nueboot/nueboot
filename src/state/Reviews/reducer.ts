const initialState = {
  byId: {},
};

const ReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REVIEWS.RECEIVE_REVIEW':
      return {
        ...state,
        byId: {
          [action.payload.id]: {
            id: action.payload.id,
            reviews: {
              ...action.payload.reviews,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default ReviewsReducer;
