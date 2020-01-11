import React, {Component} from 'react';
import Scoreboard from "./Scoreboard";
import SingleCard from "./SingleCard";

class GameContainer extends Component {

    state = {
        cardsResultsVisibility: 'hidden',
        gameStatus: '',
        cardOne: Math.floor(Math.random() * 200),
        cardTwo: Math.floor(Math.random() * 200),
    }

    showResult = (event) => {
        this.setState({
            cardsResultsVisibility: '',
        });

        const winnerNumber = (this.state.cardOne > this.state.cardTwo) ? this.state.cardOne : this.state.cardTwo;
        const clickedNumber = event.target.children[2].innerHTML;

        if (winnerNumber == clickedNumber) {
            this.setState({
                gameStatus: 'gc-win',
            });
        } else {
            this.setState({
                gameStatus: 'gc-lose',
            });        }
    }

    render() {

        const newArray = [this.state.cardOne, this.state.cardTwo];
        const generateCards =newArray.map((value, index) => {
            return(
                <SingleCard key={index} number={index} click={this.showResult} cardValue={value}/>
            );
        });

        return (
            <section className={"game-container " + this.state.gameStatus}>
                <div className="game-container__dojo">
                    <Scoreboard />
                    <section className={"game-container-dojo__cards-container " + this.state.cardsResultsVisibility}>
                        {generateCards}
                    </section>
                </div>
            </section>
        );
    }
}

export default GameContainer;