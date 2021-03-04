import React from "react"
import pokebatexss from "../assets/pokebatexss.jpg"
function PokeBattleEx(){
    return(
    <div className="card" style={{width: "18rem"}}>
    <img src={pokebatexss} className="card-img-top" alt="Vist the PokeBattleEx site"/>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Developed by the Pokemen, Pokemon Battle Experience brings the fun of Nintendo's Pokemon to the web, closely simulating the gameplay of Pokemon battles. Utilizing a Pokemon API and a Pokemon card game API, users can access and battle nearly all 898 Pokemon.</p>
        <a href="https://tyrannofloresrex.github.io/PokeBatEx/" target="blank" rel="noreferrer" className="btn btn-primary">Link</a>
    </div>
    </div>
    )
}

export default PokeBattleEx