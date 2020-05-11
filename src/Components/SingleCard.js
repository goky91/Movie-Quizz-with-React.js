import React, {useState, useEffect} from "react";
import axios from 'axios';

const SingleCard = (props) => {
    // single card has state of image source, title and rating
    const [card, setNewCard] = useState({imgSrc: '', title: '', rating: ''});
    const singleCardId = props.id;

    useEffect( () => {
        // API key is stored in separate file .env as an environmental variable
        const API_KEY = `${process.env.REACT_APP_API_KEY}`;
        console.log(API_KEY);

        // Make new http request with id prop
        const tmdbRequest = `https://api.themoviedb.org/3/movie/${props.id}?api_key=${API_KEY}`;

        axios.get(tmdbRequest)
            .then(movie => {
                const movieInfo = movie.data;
                // Our API request gives us these properties
                setNewCard({
                    imgSrc: `https://image.tmdb.org/t/p/w200/${movie.data.poster_path}`,
                    title: movie.data.title,
                    rating: movie.data.vote_average
                });
        
            }).catch(error => {
                console.log(error);
            });
    }, [singleCardId]);

    return (
        <div onClick={props.click} className="cards-container__card">
            <img src={card.imgSrc} className="card__poster" />
            <div className="card__title">{card.title}</div>
            <div className={"card__result"}>{card.rating}</div>
        </div>
    ); 
}

export default SingleCard;