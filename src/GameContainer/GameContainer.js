import React, {Component} from 'react';
import Scoreboard from "./Scoreboard";
import CardsContainer from "./CardsContainer";
import SingleCard from "./SingleCard";

class GameContainer extends Component {

    state = {
        cardsResultsVisibility: 'hidden',
        gameStatus: 'gc-lose',
        cardOne: 100,
        cardTwo: 200,
        richer: null
    }

    showResult = (event) => {
        this.setState({
            cardsResultsVisibility: '',
            richer: (this.state.cardOne > this.state.cardTwo) ? this.state.cardOne : this.state.cardTwo
        });
        if (this.state.richer === event.target.innerText) {
            console.log('WIN');
        } else {
            console.log('LOSE');
        }
    }

    render() {
        return (
            <section className={"game-container " + this.state.gameStatus}>
                <div className="game-container__dojo">
                    <Scoreboard />
                    <CardsContainer visible={ this.state.cardsResultsVisibility }>
                        <SingleCard number='one' click={this.showResult}>{'$' + this.state.cardOne }</SingleCard>
                        <SingleCard number='two' click={this.showResult}>{'$' + this.state.cardTwo }</SingleCard>
                    </CardsContainer>
                </div>
            </section>
        );
    }
}

export default GameContainer;