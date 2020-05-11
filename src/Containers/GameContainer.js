import React, {useState, useEffect} from 'react';

import SingleCard from '../Components/SingleCard';

const GameContainer = () => {

    //state
    const [cardsResultsVisibility, toggleVisbility] = useState('hidden');
    const [gameStatus, changeStatus] = useState('neutral');
    const [winnerCard, setWinnerCard] = useState(0);

    //generate two cards
    const cardA = Math.floor(Math.random() * 100);
    const cardB = Math.floor(Math.random() * 100);

    const cardsList = [cardA, cardB];

    const newCards = cardsList.map( (cardId, cardOrder) => {
        return (
            <SingleCard key={cardOrder} id={cardId} />
        );
    });
    

    //generate elements
        return (
            <section className={"game-container " + gameStatus} >
                <div className="game-container__dojo">
                    <section className={"game-container-dojo__cards-container"}>
                        {newCards}
                    </section>
                </div>
            </section>
        );
};

export default GameContainer;