import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../../../ThemeProvider';
import {getResponsiveHeight, getResponsiveWidth} from '../../utils/dimensions';
const SvgShare = props => {
  const {theme} = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={getResponsiveWidth(0.066)}
      height={getResponsiveHeight(0.03)}
      fill="none"
      {...props}>
      <Path
        stroke={'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92ZM10.11 13.65l3.58-3.59"
      />
    </Svg>
  );
};
export default SvgShare;
