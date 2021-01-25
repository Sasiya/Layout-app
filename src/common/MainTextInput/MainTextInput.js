import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import PrimaryButton from '../PrimaryButton';

export default class MainTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {placeholder, text, onPress, onChangeText} = this.props;
    return (
      <View style={styles.primaryContainer}>
        <View style={styles.mainContainer}>
        <TextInput keyboardType={'decimal-pad'} onChangeText={(text)=> onChangeText(text)} placeholder={placeholder}/>
      </View>
      <PrimaryButton text={text} onPress={onPress} />
      </View>
      
    );
  }
}
