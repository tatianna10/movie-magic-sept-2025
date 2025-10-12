import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String,
});

const Movie = model('МMovie', movieSchema);

export default Movie;