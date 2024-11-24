import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';
import { useTheme } from '../../../ThemeProvider';
const SvgLinkedDevices = props => {
  const {theme}= useTheme();

  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={getResponsiveWidth(0.075)}
    height={24}
    fill="none"
    {...props}>
    <G
      stroke={theme.colors.text}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)">
      <Path d="M10.2 19.67H5.7c-1.49 0-2.7-1.19-2.7-2.66v-.89a.9.9 0 0 1 .9-.89h3.23c.24 0 .47.1.64.26l1.27 1.25c.17.17.4.26.64.26h.52M4.352 15.05V5.41c0-1.33 1.25-2.41 2.78-2.41h9.28c1.54 0 2.78 1.08 2.78 2.41v3.17" />
      <Path d="M18.998 8.58h-4.1a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h4.1a2 2 0 0 0 2-2v-8.42a2 2 0 0 0-2-2ZM16.5 18.34h.9" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)};
export default SvgLinkedDevices;
