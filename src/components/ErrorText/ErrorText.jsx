import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorText = ({message}) => {
  return (
    <Text style={styles.text}>
        {message}
    </Text>
  )
}

export default ErrorText

const styles = StyleSheet.create({
    text:{
        color:'red'
    }
})