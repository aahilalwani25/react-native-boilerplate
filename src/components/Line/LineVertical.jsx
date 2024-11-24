import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getResponsiveHeight, getResponsiveWidth } from '../../utils/dimensions'

const LineVertical = ({height= getResponsiveHeight(0.1), lineColor='black'}) => {
  return (
    <View style={[styles.vertical,{height, backgroundColor: lineColor}]}/>
  )
}

export default LineVertical

const styles = StyleSheet.create({
    vertical:{
        width: getResponsiveWidth(0.001)
    }
})