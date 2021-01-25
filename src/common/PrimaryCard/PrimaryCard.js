import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class PrimaryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {id, name, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
        <Text style={styles.textStyles}> ID           {id} </Text>
        <Text style={styles.textStyles}> Name    {name}</Text>
      </TouchableOpacity>
    );
  }
}
