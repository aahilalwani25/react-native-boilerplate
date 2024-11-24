import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../ThemeProvider'
import { getResponsiveHeight, getResponsiveWidth } from '../utils/dimensions';

const LoginScreen = () => {
    const {theme}= useTheme();
  return (
    <View style={styles.container}>
      <Text style={{color: theme.colors.text}}>LoginScreen</Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        width: getResponsiveWidth(1),
        height: getResponsiveHeight(1)
    }
})