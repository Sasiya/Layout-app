import {api} from './api';

export const getUsers = params => {
    return api.get('users');
  };

export const getUserById = params => {
    return api.get('users', {
      params: {...params},
    });
  };



