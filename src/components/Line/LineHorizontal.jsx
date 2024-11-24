import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';

const LineHorizontal = ({
  width = getResponsiveWidth(0.1),
  lineColor = 'black',
}) => {
  return (
    <View style={[styles.vertical, {width, backgroundColor: lineColor}]} />
  );
};

export default LineHorizontal;

const styles = StyleSheet.create({
  vertical: {
    height: getResponsiveHeight(0.001),
  },
});
