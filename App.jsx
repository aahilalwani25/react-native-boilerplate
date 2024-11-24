import {Text, View} from 'react-native';
import React, {Component} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {PaperProvider} from 'react-native-paper';
import {useTheme} from './ThemeProvider';
import {darkTheme, lightTheme} from './src/utils/colors';

function App() {
  const {theme} = useTheme();
  return (
    <PaperProvider theme={theme}>
      <AppNavigation />
    </PaperProvider>
  );
}

export default App;
