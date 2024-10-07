import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';
import getFontSize from '../../utils/fontSize';
import ErrorText from '../ErrorText/ErrorText';

const Input = ({
  value,
  onValueChange,
  placeholder,
  leftIcon,
  rightIcon,
  onRightIconPress,
  errorMessage=null,
  requiredField = false,
  secureTextEntry = false,
}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <View style={style.inputView}>
      <Text style={style.placeholder}>
        {placeholder}
        {requiredField && <Text style={style.starMark}> * </Text>}
      </Text>
      <TextInput
        mode="outlined"
        focusable={true}
        value={value}
        secureTextEntry={secureTextEntry}
        left={<TextInput.Icon icon={leftIcon} />}
        right={<TextInput.Icon onPress={onRightIconPress} icon={rightIcon} />}
        textColor={'black'}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        style={[style.inputContainer]}
        onBlur={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        activeOutlineColor={isActive ? 'black' : 'transparent'}
        cursorColor="black"
        outlineStyle={style.outlineStyle}
        outlineColor={'yellow'}
        onChangeText={onValueChange}
      />
      {errorMessage && <ErrorText message={errorMessage}/>}
    </View>
  );
};
const style = StyleSheet.create({
  inputView: {
    height: getResponsiveHeight(0.12),
  },
  inputContainer: {
    borderRadius: 15,
    // borderWidth:1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    width: getResponsiveWidth(0.8),
  },
  outlineStyle: {
    borderRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  placeholder: {
    fontSize: getFontSize(15),
    color: 'grey',
    fontWeight: 'bold',
    paddingBottom: getResponsiveWidth(0.02),
  },
  starMark: {
    color: 'yellow',
  },
});

export default Input;
