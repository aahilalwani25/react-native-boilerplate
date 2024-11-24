import {createDrawerNavigator} from '@react-navigation/drawer';
import UserBottomTabBar from '../BottomTabBar/UserBottomTabBar';
import {View} from 'react-native';
import DrawerContent from './DrawerContent';
//import SettingsScreen from '../../screens/UserDashboard/';

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={UserBottomTabBar} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;
