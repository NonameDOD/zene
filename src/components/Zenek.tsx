import {type ZeneTipus} from "../adat"
import Zene from "./Zene"
import './Zenek.css'
interface ZeneListaProps {
    lista : ZeneTipus[]
}


export default function Zenek({lista}:ZeneListaProps) {
    return  (
        <>
            {
                lista.map((e,i)=>{
                    return <Zene zenem={e} key={i}/>
                })
            }
            
        </>
    )
}