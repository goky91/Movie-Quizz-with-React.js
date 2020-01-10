import React, {Component} from "react";

class CardsContainer extends Component {

    render() {
        return (
            <section className={"game-container-dojo__cards-container " + this.props.visible}>
                {this.props.children}
            </section>
        );
    }
}

export default CardsContainer;