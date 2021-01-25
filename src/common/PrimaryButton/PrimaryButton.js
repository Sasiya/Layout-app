import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class PrimaryButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rectange}>
          <View style={styles.triangle} />
          <Text style={styles.textStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
