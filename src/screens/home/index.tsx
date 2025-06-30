import { useNavigate } from "react-router"

export function Home(){
    const nav = useNavigate()

    return(
        <text bindtap={()=>nav("/productDetail")}>Ir para detalhes do produto</text>
    )
}