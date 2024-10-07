import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';
import getFontSize from '../../utils/fontSize';
import SvgGoogle from '../../assets/icons/SvgGoogle';
import SvgFacebook from '../../assets/icons/SvgFacebook';
import { useTheme } from '../../../ThemeProvider';

//const iconImage= require('../../assets/icons/icon-google.png');

const SocialAuthButton = ({social, text, onPress, backgroundColor='transparent'}) => {
    const {theme}= useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,{backgroundColor}]}>
      {social==='google' && (<SvgGoogle/>)}
      {social==='facebook' && (<SvgFacebook/>)}
      <Text style={[styles.text,{color: theme.colors.text}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: getResponsiveWidth(0.8),
    height: getResponsiveHeight(0.06),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 30,
  },
  icon: {
    width: getResponsiveWidth(0.1),
    height: getResponsiveHeight(0.1),
    objectFit: 'contain',
  },
  text: {
    fontSize: getFontSize(20),
  },
});

export default SocialAuthButton;
