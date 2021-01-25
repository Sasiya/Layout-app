import React, { Component } from 'react';
import { View, Text } from 'react-native';

import UserListPage from '../app/UserListPage';

import Header from '../common/Header';
import MainTextInput from '../common/MainTextInput';
import PrimaryButton from '../common/PrimaryButton';


export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <UserListPage />
    );
  }
}
