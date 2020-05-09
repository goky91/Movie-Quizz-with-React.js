import React, {useState, useEffect} from 'react';

import {MovieCard} from '../Services/GenerateMovieCard';
import SingleCard from '../Components/SingleCard';

const GameContainer = () => {

    //state
    const [cardsResultsVisibility, toggleVisbility] = useState('hidden');
    const [gameStatus, changeStatus] = useState('neutral');
    const [winnerCard, setWinnerCard] = useState(0);

    //generate two cards
    let cardOne = new MovieCard;
    let cardTwo = new MovieCard;

                            // CONTINUE HERE
                            
                            // const generateNew = () => {
                            //     cardOne = new MovieCard;
                            // }

    //generate elements
        return (
            <section className={"game-container " + gameStatus} >
                <div className="game-container__dojo">
                    <section className={"game-container-dojo__cards-container"}>
                        <SingleCard id={cardOne.id} poster={cardOne.poster} title={cardOne.title} rating={cardOne.rating} />
                        <SingleCard id={cardTwo.id} poster={cardTwo.poster} title={cardTwo.title} rating={cardTwo.rating} />
                    </section>
                </div>
            </section>
        );
};

export default GameContainer;