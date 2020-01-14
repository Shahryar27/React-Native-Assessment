import React, { Component } from 'react';
import TodoList from './TodoList'
import { Provider } from 'react-redux';
import store from './store';
import Icon from "react-native-vector-icons/AntDesign"
import AsyncStorage from '@react-native-community/async-storage'

class List extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="profile" size={25} style={{ color: tintColor }} />
    )
}


  render() {
    return (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  }
}

export default List;