import {Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen';
// import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
// import OtpScreen from '../screens/Auth/OtpScreen';
// import ResetPasswordScreen from '../screens/Auth/ResetPasswordScreen';
import {useSelector} from 'react-redux';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
//import NavigationDrawer from '../components/NavigationDrawer/NavigationDrawer';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const userState = useSelector(state => state.user);
  const [isLoggedIn,setIsLoggedIn]= useState(false);

  useEffect(()=>{
    //console.log(userState)
    if(userState.email){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  },[userState])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}>
          {isLoggedIn ? (
            <Stack.Screen name="dashboard" component={StartScreen} />
          ) : (
            <>
              <Stack.Screen name="splash-screen" component={StartScreen} />
              <Stack.Screen name="login-screen" component={LoginScreen} />
            {/* <Stack.Screen name="dashboard" component={NavigationDrawer} /> */}
              <Stack.Screen name="signup-screen" component={SignupScreen} />
              {/* <Stack.Screen
                name="forgot-password"
                component={ForgotPasswordScreen}
              />
              <Stack.Screen name="otp" component={OtpScreen} />
              <Stack.Screen
                name="reset-password"
                component={ResetPasswordScreen}
              /> */}
            </>
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
