import React from 'react';
import { View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './js/components/authentication/Login'
import Input from './js/components/home/Input'
import List from './js/components/home/List'
import TodoList from './js/components/home/TodoList'
import TodoInput from './js/components/home/TodoInput'
import Logout from './js/components/home/Logout'
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';



const AppTabNavigator = createMaterialTopTabNavigator({
  List: List,
  Input: Input,
  Logout: Logout
},
{
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    labelStyle: {
      fontSize: 15,
    },
    activeTintColor: 'green',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white'
    },
    indicatorStyle :{
      backgroundColor: 'green'
    },
    tabStyle:{
      height: 45
    }
  }
}
);



const MainNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Input: {
    screen: AppTabNavigator,
    navigationOptions: {
      header: null
    },
  },
  // List: {
  //   screen: AppTabNavigator,
  //   navigationOptions: {
  //     header: null
  //   }
  // },
  Logout: {
    screen: Logout,
    navigationOptions: {
      header: null
    }
  }
})

const Apps = createAppContainer(MainNavigator)

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle='light-content' backgroundColor='green'></StatusBar>
        <Apps></Apps>
        {/* <Input /> */}
        {/* <List /> */}
        {/* <TodoInput /> */}
        {/* <TodoList /> */}
        {/* <Logout /> */}
      </View>
    )
  }
}

export default App;