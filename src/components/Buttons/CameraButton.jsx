import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getResponsiveHeight, getResponsiveWidth } from '../../utils/dimensions'
import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar'
import { getResponsiveBorderRadius } from '../../utils/getResponsiveBorderRadius'
import { Icon } from 'react-native-paper'

const CameraButton = ({onClick, icon}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.cameraBtn}>
      {/* <Icon icon={'camera-flip-outline'} color='white' size={20}/> */}
    </TouchableOpacity>
  )
}

export default CameraButton

const styles = StyleSheet.create({
    cameraBtn:{
        borderColor:'white',
        borderWidth:2,
        width: getResponsiveWidth(0.22),
        height: getResponsiveHeight(0.1),
        borderRadius: getResponsiveBorderRadius(10)
    }
})