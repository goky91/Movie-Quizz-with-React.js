import React from "react";

const SingleCard = (props) => {
        return (
            <div onClick={props.click} className={"cards-container__card"}>
                <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg" className="card__poster" />
                <div className="card__title">Ford v Ferrary</div>
                <div className={"card__result " + props.number} >{props.cardValue}</div>
            </div>
        );
}

export default SingleCard;