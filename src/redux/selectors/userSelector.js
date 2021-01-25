import {createSelector} from 'reselect';

const userDataSelector = state => state.user;

const userListSelector = createSelector(userDataSelector, payload =>
    payload.get('userData'),
  );
const userInfoSelector = createSelector(userDataSelector, payload =>
    payload.get('userInfo'),
  );
const userLoading = createSelector(userDataSelector, payload =>
    payload.get('loading'),
  );

  export const userSelector = state => ({
    userData: userListSelector(state),
    userInfo: userInfoSelector(state),
    loading: userLoading(state),
  });