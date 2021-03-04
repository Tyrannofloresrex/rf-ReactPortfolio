import React from "react"
import despensass from "../assets/despensass.jpg"
function Despensa(){
    return(
    <div className="card" style={{width: "18rem"}}>
    <img src={despensass} className="card-img-top" alt="Vist the Despensa site" />
    <div className="card-body">
        <h5 className="card-title">Despensa</h5>
        <p className="card-text">Despensa is an organization app which utilizes MYSQL to store user generated kitchen inventories. User can create a secure account then create several inventories in different locations, remove items, as well as add items to a shopping list. Developed by Larder Squad Six.</p>
        <a href="https://quiet-sands-24336.herokuapp.com/" target="blank" rel="noreferrer" className="btn btn-primary">Link</a>
    </div>
    </div>
    )
}

export default Despensa