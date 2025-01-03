import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            fill="#214184"
            fillRule="evenodd"
            d="M4.305 7.625 7.26 10.58a1.125 1.125 0 1 1-1.59 1.59L.795 7.295 0 6.5l.795-.795L5.67.83a1.125 1.125 0 0 1 1.59 1.59L4.305 5.375h14.82a4.875 4.875 0 0 1 0 9.75h-3a1.125 1.125 0 1 1 0-2.25h3a2.625 2.625 0 1 0 0-5.25H4.305Z"
            clipRule="evenodd"
        />
    </Svg>
)
export default BackIcon
