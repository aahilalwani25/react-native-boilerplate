import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgFacebook = (props) => (
    <Svg
    width={25}
    height={25}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 127.777 93.616 233.685 216 252.89V330h-65v-74h65v-56.4c0-64.16 38.219-99.6 96.695-99.6 28.009 0 57.305 5 57.305 5v63h-32.281C305.918 168 296 187.733 296 207.978V256h71l-11.35 74H296v178.89C418.385 489.685 512 383.777 512 256Z"
      style={{
        fill: "#1877f2",
        fillRule: "nonzero",
      }}
    />
    <Path
      d="M355.65 330 367 256h-71v-48.022c0-20.245 9.917-39.978 41.719-39.978H370v-63s-29.297-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.89a257.912 257.912 0 0 0 40 3.11c13.608 0 26.966-1.065 40-3.11V330h59.65Z"
      style={{
        fill: "#fff",
        fillRule: "nonzero",
      }}
    />
  </Svg>
)
export default SvgFacebook
