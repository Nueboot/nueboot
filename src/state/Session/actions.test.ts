import { loginSuccess, LoginSuccessAction } from './actions';

describe('Session Actions', () => {
  describe('.loginSuccess', () => {
    let action: LoginSuccessAction;
    beforeEach(() => {
      action = loginSuccess();
    });

    it('creates the correct login success action type', () => {
      expect(action.type).toBe('SESSION.LOGIN_SUCCESS');
    });
  });
});
