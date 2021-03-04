import React from "react"
import soundschnobss from "../assets/soundschnobss.jpg"
function SoundSchnob(){
    return(
    <div class="className" style={{width: "18rem"}}>
    <img src={soundschnobss} class="className-img-top" alt="Visit the Schound Schnob site" />
    <div class="className-body">
        <h5 class="className-title">Card title</h5>
        <p class="className-text">A simple site that uses arrays to generate somewhat random responses to user input. Barton Beat is a music snob and will tell you what he thinks of your favorite music. The design is inspired by "The Beat", a beloved (but now closed) record store in Sacramento,CA.</p>
        <a href="https://tyrannofloresrex.github.io/soundschnob/" target="blank" rel="noreferrer" className="btn btn-primary">Link</a>
    </div>
    </div>
    )
}

export default SoundSchnob