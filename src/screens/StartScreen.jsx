import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'

const StartScreen = () => {
  SplashScreen.hide();
  return (
    <View>
      <Text>StartScreen</Text>
    </View>
  )
}

export default StartScreen