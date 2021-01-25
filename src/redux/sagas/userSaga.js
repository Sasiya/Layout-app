import {put, call, fork, takeLatest} from 'redux-saga/effects';
import {constants as userConstants, actions as userActions} from '../modules/user';
import * as userApis from '../services/userApis';


/**
 * Take all user list
 */
export function* getUserList() {
  yield put(userActions.setLoading(true));
   
  try {
    const res = yield call(userApis.getUsers)
    console.log({res})
    yield put(userActions.setUsers(res.data.data));
    yield put(userActions.setLoading(false));

  } catch (error) {
    console.log('user Saga', error);
    yield put(userActions.setLoading(false));

  }
}
/**
 * get user information by an id.
 */
export function* getUserInfo(action) {

let id = action.payload.userId
yield put(userActions.setLoading(true));
   
  try {
    const res = yield call(userApis.getUserById, {id})
    yield put(userActions.setLoading(false));
    yield put(userActions.setUserById(res.data.data));

  } catch (error) {
    yield put(userActions.setLoading(false));
    console.log('user Saga', error);
  }
}

function* watchUser() {
  yield takeLatest(userConstants.GET_USERS, getUserList);
  yield takeLatest(userConstants.GET_BY_ID, getUserInfo);
}

export const userSaga = [fork(watchUser)];