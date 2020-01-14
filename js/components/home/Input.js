import React, { Component } from 'react';
import TodoInput from './TodoInput'
import { Provider } from 'react-redux';
import store from './store';
import Icon from "react-native-vector-icons/Ionicons"
import AsyncStorage from '@react-native-community/async-storage'

class Input extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-add" size={25} style={{ color: tintColor }} />
    )
}

  render() {
    return (
      <Provider store={store}>
        <TodoInput />
      </Provider>
    );
  }
}

export default Input;