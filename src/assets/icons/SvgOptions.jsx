import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {useTheme} from '../../../ThemeProvider';
const SvgOptions = props => {
  const {theme} = useTheme();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
      {...props}>
      <Circle
        cx={13}
        cy={13}
        r={12}
        stroke={theme.colors.text}
        strokeWidth={2}
        transform="rotate(90 13 13)"
      />
      <Path
        fill={theme.colors.text}
        d="M13 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13 14.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM13 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
      />
    </Svg>
  );
};
export default SvgOptions;
