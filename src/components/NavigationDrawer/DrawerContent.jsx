import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';
import {getResponsiveBorderRadius} from '../../utils/getResponsiveBorderRadius';
import {Icon} from 'react-native-paper';
import getFontSize from '../../utils/fontSize';
import {useTheme} from '../../../ThemeProvider';
import PrimaryButton from '../Buttons/PrimaryButton';
import DangerousPrimaryButton from '../Buttons/DangerousPrimaryButton';
import {LineHorizontal, LineVertical} from '../Line';
import {DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import SvgLinkedDevices from '../../assets/icons/SvgLinkedDevices';
import SvgPrivacyPolicy from '../../assets/icons/SvgPrivacyPolicy';
import {logoutUser} from '../../redux/slices/userSlice';
import {useNavigation} from '@react-navigation/native';

const DrawerContent = props => {
  const userState = useSelector(state => state.user);
  const photo = userState?.photo;
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logoutHandler = useCallback(async () => {
    await dispatch(logoutUser());
    navigation.navigate('login-screen');
  }, []);

  return (
    <View style={[styles.drawerContainer, {backgroundColor: theme.colors.background}]}>
      <View style={styles.imageView}>
        {photo ? (
          <Image
            source={{
              uri: userState?.photo,
            }}
            style={{
              width: getResponsiveWidth(0.27),
              height: getResponsiveHeight(0.12),
              borderRadius: getResponsiveBorderRadius(10),
            }}
          />
        ) : (
          <Icon
            source={'account-circle'}
            //color={theme.colors.text}
            size={getFontSize(100)}
          />
        )}
      </View>
      <Text style={[styles.usernameText, {color: theme.colors.text}]}>
        {userState?.name}
      </Text>
      <Text style={{color: theme.colors.text}}>{userState?.email}</Text>
      <View style={styles.lineSpace}>
        <LineHorizontal width={getResponsiveWidth(0.6)} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: getResponsiveWidth(0.65),
          paddingVertical: 10,
        }}>
        <TouchableOpacity>
          <Text style={[styles.textClick,{color: theme.colors.primary}]}>0 Homies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.textClick,{color: theme.colors.primary}]}>0 Profile Views</Text>
        </TouchableOpacity>
      </View>
      <LineHorizontal width={getResponsiveWidth(0.6)} />
      <DrawerItem
        style={{width: getResponsiveWidth(0.65)}}
        icon={() => <SvgLinkedDevices />}
        labelStyle={{color: theme.colors.text}}
        label="Linked Devices"
        onPress={() => {}}
      />
      <DrawerItem
        style={{width: getResponsiveWidth(0.65)}}
        icon={() => <Icon source={'cog'} size={30} />}
        labelStyle={{color: theme.colors.text}}
        label="Settings"
        onPress={() => {}}
      />
      <DrawerItem
        style={{
          width: getResponsiveWidth(0.65),
        }}
        icon={() => <SvgPrivacyPolicy />}
        labelStyle={{color: theme.colors.text}}
        label={() => (
          <Text style={{color: theme.colors.text}}>Privacy Policy</Text>
        )}
        onPress={() => {}}
      />
      {/* <DrawerItemList {...props}></DrawerItemList> */}
      <View style={styles.logoutView}>
        <DangerousPrimaryButton
          onPress={logoutHandler}
          title={'Logout'}
          width={getResponsiveWidth(0.5)}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    height: getResponsiveHeight(1),
    width: getResponsiveWidth(0.682),
    alignItems: 'center',
  },
  imageView: {
    width: getResponsiveWidth(0.6),
    height: getResponsiveHeight(0.2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameText: {
    fontSize: getFontSize(30),
  },
  lineSpace: {
    height: getResponsiveHeight(0.06),
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: getResponsiveWidth(0.65),
  },
  logoutView: {
    width: getResponsiveWidth(0.6),
    //height: getResponsiveHeight(0.2),
    position: 'absolute',
    alignItems: 'center',
    bottom: getResponsiveHeight(0.1),
  },
  textClick: {
    //color: 'blue',
    fontWeight: 'bold',
  },
});
