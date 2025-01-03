import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ExitIcon = (props) => (
    <Svg
        fill="none"
        {...props}
    >
        <Path fill="#214184" d="M5 5h7V3H3v18h9v-2H5V5Z" />
        <Path fill="#214184" d="m21 12-4-4v3H9v2h8v3l4-4Z" />
    </Svg>
)
export default ExitIcon
