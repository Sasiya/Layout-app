import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {children} = this.props;
    return (
      <View style={styles.mainContainer}>
          <StatusBar barStyle="light-content" backgroundColor={'#186286'} />
        <Text style={styles.headerText}> {children} </Text>
      </View>
    );
  }
}
