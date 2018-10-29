import { BootReview } from 'api/types';
import { connect } from 'react-redux';
import { createReview, fetchReview } from 'state/Reviews/actions';
import { getReviewsForBoot } from 'state/Reviews/selectors';
import { getCurrentUserName } from 'state/Session/selectors';
import Reviews from './Reviews';

const mapStatetoProps = (state, ownProps) => ({
  reviews: getReviewsForBoot(state, ownProps.id),
  currentUser: getCurrentUserName(state),
});

const mapDispatchToProps = dispatch => ({
  submitReview: (review: BootReview, user) =>
    dispatch(createReview(review, user)),
  getReviews: (id: string) => dispatch(fetchReview(id)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Reviews);
