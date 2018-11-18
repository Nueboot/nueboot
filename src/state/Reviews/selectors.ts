import { State } from 'state/types';

export const getReviewsForBoot = (state: State, id: string) => {
  const bootReview = state.reviews.byId[id];
  if (bootReview && bootReview.reviews) {
    return Object.keys(bootReview.reviews).map(key => {
      return { id: key, ...bootReview.reviews[key] };
    });
  }
  return [];
};
