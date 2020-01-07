import React, {Component} from 'react';
import Scoreboard from "./Scoreboard";
import CardsContainer from "./CardsContainer";

class GameContainer extends Component {
    render() {
        return (
            <section className="game-container">
                <div className="game-container__dojo">
                    <Scoreboard />
                    <CardsContainer />
                </div>
            </section>
        );
    }
}

export default GameContainer;