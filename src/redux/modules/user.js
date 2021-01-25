import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

export const GET_USERS = 'APP/USER/GET_USERS';
export const SET_USERS = 'APP/USER/SET_USERS';
export const GET_BY_ID = 'APP/USER/GET_BY_ID';
export const SET_BY_ID = 'APP/USER/SET_BY_ID';
export const SET_LOADING = 'APP/USER/SET_LOADING';

export const constants = {
    GET_USERS,
    SET_USERS,
    GET_BY_ID,
    SET_BY_ID,
    SET_LOADING
};
//Actions
export const getUsers = createAction(GET_USERS, () => ({}));
export const setUsers = createAction(SET_USERS, (userData) => ({userData}));
export const getUserById = createAction(GET_BY_ID, (userId) => ({userId}));
export const setUserById = createAction(SET_BY_ID, (userInfo) => ({userInfo}));
export const setLoading = createAction(SET_LOADING, (loading) => ({loading}));

export const actions = {
    getUsers,
    setUsers,
    getUserById,
    setUserById,
    setLoading,
};

export const reducers = {
    [GET_USERS]: (state, {payload}) =>
      state.merge({
        ...payload,
      }),
    [SET_USERS]: (state, {payload}) =>
      state.merge({
        ...payload,
      }),
    [GET_BY_ID]: (state, {payload}) =>
      state.merge({
        ...payload,
      }),
    [SET_BY_ID]: (state, {payload}) =>
      state.merge({
        ...payload,
      }),
    [SET_LOADING]: (state, {payload}) =>
      state.merge({
        ...payload,
      }),
    }

    export const initialState = () =>
    Map({
      userData: [],  
      userInfo: {},
      loading: false,
    });

export default handleActions(reducers, initialState());