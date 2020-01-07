import React, {Component} from "react";
import SingleCard from "./SingleCard";

class CardsContainer extends Component {
    render() {
        return (
            <section className="game-container-dojo__cards-container">
                <SingleCard />
                <SingleCard />
            </section>
        );
    }
}

export default CardsContainer;