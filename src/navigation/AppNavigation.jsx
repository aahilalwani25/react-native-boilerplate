import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StartScreen from '../screens/StartScreen'

const Stack= createStackNavigator()

export class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Group screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='splash' component={StartScreen}/>
            </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default AppNavigation