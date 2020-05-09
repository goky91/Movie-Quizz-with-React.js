import React, {setState, useEffect} from 'react';

const GameContainer = () => {

    //state
    const [cardsResultsVisibility, toggleVisbility] = setState('hidden');
    const [gameStatus, changeStatus] = setState('neutral');
    const [cardOne, generateCardOne] = setState(Math.floor(Math.random() * 200));
    const [cardTwo, generateCardTwo] = setState(Math.floor(Math.random() * 200));

    //generate elements
        return (
            <section className={"game-container " + gameStatus}>
                <div className="game-container__dojo">
                    <section className={"game-container-dojo__cards-container " + cardsResultsVisibility}>
                     
                    </section>
                </div>
            </section>
        );
};

export default GameContainer;