import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../../../ThemeProvider';
import { getResponsiveHeight, getResponsiveWidth } from '../../utils/dimensions';
const SvgPosts = props => {
  const {theme} = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={getResponsiveWidth(0.1)}
      height={getResponsiveHeight(0.03)}
      fill="none"
      {...props}>
      <Path
        stroke={theme.colors.text}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2}
        d="M8 2v3M16 2v3M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM8 11h8M8 16h4"
      />
    </Svg>
  );
};
export default SvgPosts;
