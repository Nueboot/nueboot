import { createBrowserHistory } from 'history';
import { getAllBoots } from 'state/Boots/actions';
import { verifyUser } from 'state/Session/actions';
import configureStore from 'store/configureStore';

export const history = createBrowserHistory();
export const store = configureStore(history);

export default () => {
  store.dispatch(verifyUser());
  store.dispatch(getAllBoots());
};
