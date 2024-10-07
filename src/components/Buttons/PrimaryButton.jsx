import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../../../ThemeProvider'
import { getResponsiveHeight } from '../../utils/dimensions';
import getFontSize from '../../utils/fontSize';

const PrimaryButton = ({title, onPress, width}) => {
    const {theme}= useTheme();
    return (
        <TouchableOpacity style={[style.btn,{
            backgroundColor: theme.colors.primary,
            width
        }]} onPress={onPress}>
          <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
      )
    }
    
    const style= StyleSheet.create({
        btn:{
            height: getResponsiveHeight(0.06),
            borderRadius: 10,
            justifyContent:'center',
            alignItems:'center',
            
        },
        text:{
            color: 'black',
            fontSize: getFontSize(15),
            fontWeight:'bold'
        }
    })
    
    export default PrimaryButton