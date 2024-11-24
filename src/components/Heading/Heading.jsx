import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '../../../ThemeProvider';
import getFontSize from '../../utils/fontSize';
import { getResponsiveHeight } from '../../utils/dimensions';

const Heading = ({children, style}) => {
  const {theme} = useTheme();
  return <Text style={[{color: theme.colors.text},styles.heading, {...style}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: getFontSize(40),
    fontWeight: 'bold',
    //paddingVertical: getResponsiveHeight(0.04)
  },
});

export default Heading;
