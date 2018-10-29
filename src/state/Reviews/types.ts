import { BootReview } from 'api/types';

export interface ReviewsState {
  readonly byId: { [key: string]: BootReview[] };
}
