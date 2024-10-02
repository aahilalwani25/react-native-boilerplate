import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import { useTheme } from '../../ThemeProvider';

const StartScreen = () => {
  SplashScreen.hide();
  const {toggleTheme}= useTheme();
  const {theme}= useTheme();


  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
  }
})

export default StartScreen