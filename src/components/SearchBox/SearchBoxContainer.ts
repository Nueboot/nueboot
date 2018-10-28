import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SearchBox from './SearchBox';

const mapDispatchToProps = dispatch => ({
  onSearch: (searchText: string) => dispatch(push(`/search?q=${searchText}`)),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBox);
