import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { getResponsiveHeight, getResponsiveWidth } from "../../utils/dimensions"
const SvgSavePost = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={getResponsiveWidth(0.066)}
      height={getResponsiveHeight(0.03)}
    fill="none"
    {...props}
  >
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.82 2H7.18C5.05 2 3.32 3.74 3.32 5.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.86C20.68 3.74 18.95 2 16.82 2Z"
    />
  </Svg>
)
export default SvgSavePost
