import { DarkTheme } from "@react-navigation/native";
import { DefaultTheme } from "react-native-paper";

export const lightTheme= {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary: '#6200ee',
        background: '#ffffff',
        text: '#000000',
    }
}

export const darkTheme={
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#bb86fc',
        background: '#121212',
        text: '#ffffff',
      },
}