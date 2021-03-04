import React from "react"
import SoundSchnob from "./Card/SoundSchnob"
import PokeBattleEx from "./Card/PokeBattleEx"
import Despensa from "./Card/Despensa"
import DailyPlanner from "./Card/SoundSchnob"

function Card() {
    return (
        <div class="row">
            <div>
                <section class="jumbotron" id="portfolio">
                    <h1 class="display-4">
                        Gallery
                        </h1>
                    <hr class="my-4" />
                    <div id="card-box" class="row">
                        <SoundSchnob />
                        <PokeBattleEx />
                        <Despensa/>
                        <DailyPlanner/>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Card;