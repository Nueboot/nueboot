import { State } from 'state/types';

export const getReviewsForBoot = (state: State, id: string) => {
  const reviews = state.reviews[id];
  if (reviews) {
    return Object.keys(reviews).map(key => {
      return { id: key, ...reviews[key] };
    });
  }
  return [];
};
