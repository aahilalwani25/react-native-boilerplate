/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider } from './ThemeProvider';

export default function Main() {
    return (
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
  }
  
  AppRegistry.registerComponent(appName, () => Main);