import React, {useState, useEffect} from 'react';

import SingleCard from '../Components/SingleCard';

const GameContainer = () => {

    //state
    const [cardsResultsVisibility, toggleVisibility] = useState('hidden');
    const [gameStatus, changeStatus] = useState('neutral');
    const [winnerCard, setWinnerCard] = useState(0);

    //generate two cards
    const cardA = Math.floor(Math.random() * 100);
    const cardB = Math.floor(Math.random() * 100);

    const cardsList = [cardA, cardB];

    const visibilityHandler = () => {
        toggleVisibility('visible');
    }

    const newCards = cardsList.map( (cardId, cardOrder) => {
        return (
            <SingleCard key={cardOrder} id={cardId} click={visibilityHandler}  />
        );
    });
    

    //generate elements
        return (
            <section className={"game-container " + gameStatus} >
                <section className={"cards-container " + cardsResultsVisibility}>
                    {newCards}
                </section>
            </section>
        );
};

export default GameContainer;