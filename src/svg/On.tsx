import * as React from "react"
import Svg, { Path } from "react-native-svg"

function OnSvg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={33} height={65} viewBox="0 0 33 65" fill="none" {...props}>
      <Path
        d="M.917 4.25V35a3.427 3.427 0 003.416 3.417h6.834v24.429c0 1.742 2.289 2.357 3.177.854l17.733-30.408c1.332-2.29-.308-5.125-2.939-5.125h-7.721l8.507-22.721c.854-2.221-.786-4.613-3.177-4.613H4.333A3.427 3.427 0 00.917 4.25z"
        fill="#000"
      />
    </Svg>
  )
}

export default OnSvg
