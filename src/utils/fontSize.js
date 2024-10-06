import { PixelRatio } from "react-native";

const fontScale= PixelRatio.getFontScale();

export default function getFontSize(size){
    return size/fontScale;
}