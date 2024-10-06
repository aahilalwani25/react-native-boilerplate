import { DarkTheme } from "@react-navigation/native";
import { DefaultTheme } from "react-native-paper";

export const lightTheme= {
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary: '#E0D20A',
        background: '#F2F2F2',
        text: '#000000',
    }
}

export const darkTheme={
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#E0D20A',
        background: '#161616',
        text: '#FFFFFF',
      },
}