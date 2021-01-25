import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import UserList from '../screens/UserList';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class Navigation extends Component {
    render() {
        const myTheme = {
            dark: false,
            colors: {
                primary: '#f2f2f2',
            },
        };



        return (
            <NavigationContainer theme={myTheme} >
                <Stack.Navigator
                    initialRouteName="userList"
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
                    }}>
                    <Stack.Screen name="userList" component={UserList} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
}


