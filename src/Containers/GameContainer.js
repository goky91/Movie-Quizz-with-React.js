import React, {useState, useEffect} from 'react';

const GameContainer = () => {

    //state
    const [cardsResultsVisibility, toggleVisbility] = useState('hidden');
    const [gameStatus, changeStatus] = useState('neutral');
    const [cardOne, generateCardOne] = useState(Math.floor(Math.random() * 200));
    const [cardTwo, generateCardTwo] = useState(Math.floor(Math.random() * 200));

    //generate elements
        return (
            <section className={"game-container " + gameStatus}>
                <div className="game-container__dojo">
                    <section className={"game-container-dojo__cards-container"}>
                     
                    </section>
                </div>
            </section>
        );
};

export default GameContainer;