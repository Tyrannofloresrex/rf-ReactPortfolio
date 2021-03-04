import React from "react"
import plannerss from "../assets/plannerss.jpg"
function DailyPlanner(){
    return(
    <div class="className" style={{width: "18rem"}}>
    <img src={plannerss} alt="Daily Planner pic" class="className-img-top" alt="..." />
    <div class="className-body">
        <h5 class="className-title">Daily Planner</h5>
        <p class="className-text">This simple planner can help keep track of daily tasks. Input fields change color to indicate whether an event is upcoming, currently happening, or passed.</p>
        <a href="https://github.com/Tyrannofloresrex/dailyplanner-practice.git" target="blank" rel="noreferrer" className="btn btn-primary">Link</a>
    </div>
    </div>
    )
}

export default DailyPlanner