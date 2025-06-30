import { useNavigate } from "react-router"

export function Header(){
    const nav = useNavigate()

    return (
        <view className="header-container">
            <view bindtap={()=>nav("/")}>
                <image src="./assets/logo.png" />
            </view>

            <text bindtap={()=>nav("/")}>Scan</text>
        </view>
    )
} 