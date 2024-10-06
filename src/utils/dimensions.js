import { Dimensions } from "react-native";

const {width,height}= Dimensions.get('screen');

export function getResponsiveWidth(factor) {
    return factor*width
}

export function getResponsiveHeight(factor) {
    return factor*height
}

