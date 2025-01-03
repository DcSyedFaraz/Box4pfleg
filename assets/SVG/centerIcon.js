import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CenterIcon = (props) => (
    <Svg
       
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M9.242 9.242V3.758C9.242 1.736 10.978 0 13 0c2.022 0 3.758 1.736 3.758 3.758v5.484h5.484C24.264 9.242 26 10.978 26 13c0 2.022-1.736 3.758-3.758 3.758h-5.484v5.484C16.758 24.264 15.022 26 13 26c-2.022 0-3.758-1.736-3.758-3.758v-5.484H3.758C1.736 16.472 0 14.736 0 12.714s1.736-3.758 3.758-3.758h5.484v.286Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default CenterIcon
