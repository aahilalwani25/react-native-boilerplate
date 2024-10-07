import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgGoogle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    {...props}
  >
    <Path
      fill="#ff3e00"
      d="m6.5 9.5-4-2C7.295.648 12.962-.185 19.5 5l-2 2a42.216 42.216 0 0 0-8 0 10.522 10.522 0 0 1-3 2.5Z"
      style={{
        opacity: 0.838,
      }}
    />
    <Path
      fill="#fbbf08"
      d="m2.5 7.5 4 2v5l-4 2c-1.333-3-1.333-6 0-9Z"
      style={{
        opacity: 0.913,
      }}
    />
    <Path
      fill="#1976d0"
      d="M18.5 19.5a10.174 10.174 0 0 0-3-3c.11-.617.444-1.117 1-1.5-1.634-.493-3.3-.66-5-.5v-5h11c.75 4.275-.583 7.609-4 10Z"
      style={{
        opacity: 0.973,
      }}
    />
    <Path
      fill="#4eae50"
      d="M6.5 14.5c2.487 2.964 5.486 3.63 9 2a10.174 10.174 0 0 1 3 3c-6.228 4.583-11.562 3.583-16-3l4-2Z"
      style={{
        opacity: 0.91,
      }}
    />
  </Svg>
)
export default SvgGoogle
