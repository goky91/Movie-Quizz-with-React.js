import React, {Component} from "react";

class SingleCard extends Component {

    render() {
        return (
            <div onClick={this.props.click} className={"cards-container__card " + this.props.number}>
                <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg" className="card__poster" />
                <div className="card__title">Ford v Ferrary</div>
                <div className={"card__result " + this.props.visible} >{this.props.children}</div>
            </div>
        );
    }
}

export default SingleCard;