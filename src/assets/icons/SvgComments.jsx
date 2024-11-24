import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getResponsiveHeight, getResponsiveWidth } from "../../utils/dimensions"
const SvgComments = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={getResponsiveWidth(0.066)}
    height={getResponsiveHeight(0.03)}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7 12h8M7 8h12M7 1h12c3.314 0 6 2.798 6 6.25v6.167c0 3.452-2.686 6.25-6 6.25h-5.532a.984.984 0 0 0-.768.374l-3.816 4.77c-.3.375-.884.154-.884-.333v-3.77c0-.575-.448-1.041-1-1.041-3.314 0-6-2.799-6-6.25V7.25C1 3.798 3.686 1 7 1Z"
    />
  </Svg>
)
export default SvgComments
