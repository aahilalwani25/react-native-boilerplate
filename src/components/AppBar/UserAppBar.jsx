import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';
import Heading from '../Heading/Heading';
import getFontSize from '../../utils/fontSize';
import {useTheme} from '../../../ThemeProvider';
import {getResponsiveBorderRadius} from '../../utils/getResponsiveBorderRadius';
import {useSelector} from 'react-redux';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const UserAppBar = () => {
  const {theme, isDarkTheme} = useTheme();
  const userState = useSelector(state => state.user);
  const navigation= useNavigation();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <View style={styles.content}>
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <Image
            source={require('../../assets/images/meme_logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Heading style={styles.text}>MemeHub</Heading>
      </View>

      <View style={styles.action}>
        <Icon
          source={'bell'}
          color={theme.colors.text}
          size={getFontSize(20)}
        />
        <Icon source={'cog'} color={theme.colors.text} size={getFontSize(20)} />
      </View>
      {/* {
        openDrawer&&<Drawer/>
      } */}
    </View>
  );
};

export default UserAppBar;

const styles = StyleSheet.create({
  container: {
    width: getResponsiveWidth(1),
    height: getResponsiveHeight(0.08),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width: getResponsiveWidth(0.1),
    height: getResponsiveHeight(0.05),
    resizeMode: 'contain',
  },
  photo: {
    width: getResponsiveWidth(0.08),
    height: getResponsiveHeight(0.0375),
    borderWidth: 2,
    resizeMode: 'contain',
    borderRadius: getResponsiveBorderRadius(10), //circle
  },
  content: {
    gap: 20,
    paddingLeft: 10,
    width: getResponsiveWidth(0.6),
    justifyContent: 'start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    width: getResponsiveWidth(0.4),
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: getFontSize(15),
  },
});
