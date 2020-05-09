export class MovieCard {
    constructor (poster, title, rating) {
        this.id     = Math.floor(Math.random() * 200);
        this.poster = poster;
        this.title  = title;
        //this.rating = rating;
    }
}
