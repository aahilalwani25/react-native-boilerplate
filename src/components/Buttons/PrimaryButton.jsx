import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../ThemeProvider';
import {getResponsiveHeight} from '../../utils/dimensions';
import getFontSize from '../../utils/fontSize';
import {ActivityIndicator} from 'react-native-paper';

const PrimaryButton = ({
  title,
  textColor,
  icon,
  backgroundColor,
  onPress,
  width,
  isLoading = false,
}) => {
  const {theme} = useTheme();
  return (
    <TouchableOpacity
      style={[
        style.btn,
        {
          backgroundColor: backgroundColor ?? theme.colors.primary,
          width,
        },
      ]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color="black" />
      ) : (
        <View style={style.btnView}>
          {icon}
          <Text style={[style.text, {color: textColor ?? 'black'}]}>
            {title}
          </Text>
        </View>
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
    fontSize: getFontSize(15),
    fontWeight: 'bold',
  },
  btnView: {
    flexDirection: 'row',
  },
});

export default PrimaryButton;
