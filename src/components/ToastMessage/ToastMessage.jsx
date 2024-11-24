import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';
import getFontSize from '../../utils/fontSize';

const ToastMessage = ({type, message}) => {
  return (
    <View
      style={[
        styles.container,
        // type === 'success' && {backgroundColor: 'green'},
        // type === 'error' && {backgroundColor: 'red'},
      ]}>
      <View
        style={[
          styles.innerContainer,
          type === 'success' && {backgroundColor: '#32cd32'},
          type === 'error' && {backgroundColor: 'red'},
        ]}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getResponsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    height: getResponsiveHeight(0.06),
    bottom: getResponsiveHeight(0.06),
    zIndex: 999,
  },
  innerContainer:{
    borderRadius: 10,
    width: getResponsiveWidth(0.8),
    height: getResponsiveHeight(0.06),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'white',
    fontSize: getFontSize(20)
  }
});


export default ToastMessage;
