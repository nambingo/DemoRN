import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import ScanScreen from "./components/ScanScreen";
import HistoryScreen from "./components/HistoryScreen";
import MenuScreen from "./components/MenuScreen";
import RuleScreen from "./components/RuleScreen";
import TutorialScreen from "./components/Tutorial";
import LoginScreen from "./components/Login";

const MenuStack = createStackNavigator({
  Menu: MenuScreen,
  Rule: RuleScreen,
  Tutorial: TutorialScreen,
  Login: LoginScreen
});

MenuStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
}

const BottomTabMaterial = createBottomTabNavigator(
  {
    Scan: {
      screen: ScanScreen
    },
    History: {
      screen: HistoryScreen
    },
    Menu: {
      screen: MenuStack
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#00a219",
      inactiveTintColor: "white",
      activeTintColor: "white",
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: "#0a51c5"
      }
    },
    // shifting: false,
    activeTintColor: "white",
    activeColor: "white",
    inactiveColor: "white",
    barStyle: {
      backgroundColor: "white",
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: "solid",
      borderColor: "#d0cfd0"
    }
  }
  
  // {
  //   // defaultNavigationOptions: ({ navigation }) => ({
  //   //   tabBarIcon: ({ focused, tintColor }) => {
  //   //     const { routeName } = navigation.state;
  //   //     let iconName;
  //   //     if (routeName === 'Scan') {
  //   //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
  //   //     } else if (routeName === 'History') {
  //   //       iconName = `ios-options${focused ? '' : '-outline'}`;
  //   //     } else {
  //   //       iconName = `ios-options${focused ? '' : '-outline'}`;
  //   //     }

  //   //     // You can return any component that you like here! We usually use an
  //   //     // icon component from react-native-vector-icons
  //   //     return <Ionicons name={iconName} size={25} color={tintColor} />;
  //   //   },
  //   // }),
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray',
  //   },
  // }
);
export default createAppContainer(BottomTabMaterial);
