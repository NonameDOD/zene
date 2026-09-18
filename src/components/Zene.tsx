import {type ZeneTipus } from '../adat'
import './Zene.css'

interface ZeneKartyaProps {
    zenem : ZeneTipus
}

function Zene({zenem}:ZeneKartyaProps) {
  return (
    <>
        <div className="zene">
            <h2>{zenem.nev}</h2>
            <p><span>Hossz (ms):</span>{zenem.hossz}</p>
            <p><span>stilus: </span>{zenem.stilus}</p>
            <p><span>előadó: </span>{zenem.eloado}</p>
            <button>Kiválaszt</button>
        </div>
    </>
  )
}

export default Zene
