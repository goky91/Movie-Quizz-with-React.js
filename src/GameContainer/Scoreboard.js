import React, {Component} from 'react';

class Scoreboard extends Component {
    render() {
        return (
            <section className="game-container-dojo__scoreboard">
                <div className="scoreboard__current-score">Score: 02</div>
                <div className="scoreboard__timer">07</div>
            </section>

        );
    }
}

export default Scoreboard;