import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getResponsiveHeight, getResponsiveWidth } from "../../utils/dimensions"
const SvgHappy = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={getResponsiveWidth(0.066)}
    height={getResponsiveHeight(0.03)}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M18.724 9.861a1.477 1.477 0 1 1-2.955 0 1.477 1.477 0 0 1 2.955 0ZM10.416 9.861a1.477 1.477 0 1 1-2.954 0 1.477 1.477 0 0 1 2.954 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.385 15.77c.92 1.655 2.643 2.768 4.615 2.768 1.972 0 3.694-1.113 4.615-2.769M25 13c0 6.627-5.373 12-12 12S1 19.627 1 13 6.373 1 13 1s12 5.373 12 12Z"
    />
  </Svg>
)
export default SvgHappy
