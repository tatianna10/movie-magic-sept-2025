import Movie from "../models/Movie.js";

export default {
    getAll(filter) {
        return Movie.find(filter);
    },
    getOne(movieID) {
        return Movie.findOne({ _id: movieID });
    },
    create(movieData) {
        const movie = new Movie(movieData);

        return movie.save();

    }
};