import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import ThemeSlider from '../components/ThemeSlider';

const StartScreen = () => {
  SplashScreen.hide();
  return (
    <View>
      <ThemeSlider/>
    </View>
  )
}

export default StartScreen