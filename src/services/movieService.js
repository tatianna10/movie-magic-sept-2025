import Movie from "../models/Movie.js";

export default {
   async getAll(filter) {
        const result = await Movie.find(filter);
        return result;
    },
    getOne(movieID) {
        return Movie.findOne({ _id: movieID });
    },
    async create(movieData) {
        movieData.rating = Number(movieData.rating);

        const movie = new Movie(movieData);

        return movie.save();

    }
};