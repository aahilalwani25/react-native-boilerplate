import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../ThemeProvider';
import {getResponsiveHeight} from '../../utils/dimensions';
import getFontSize from '../../utils/fontSize';
import {ActivityIndicator} from 'react-native-paper';

const DangerousPrimaryButton = ({title, onPress, width, isLoading = false}) => {
  const {theme} = useTheme();
  return (
    <TouchableOpacity
      style={[
        style.btn,
        {
          backgroundColor: 'red',
          width,
        },
      ]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color="black" />
      ) : (
        <Text style={style.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btn: {
    height: getResponsiveHeight(0.06),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: getFontSize(15),
    fontWeight: 'bold',
  },
});

export default DangerousPrimaryButton;
