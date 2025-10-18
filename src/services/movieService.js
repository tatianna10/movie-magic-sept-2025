import Movie from "../models/Movie.js";

export default {
    getAll(filter = {}) {
        let query = Movie.find();

        if (filter.title) {
            // Get the normalized search term once (lowercase and trimmed)   //TODO Search by title, partial match, case insensitive
            const searchedTitle = String(filter.title).trim();
            if (searchedTitle) {
                const regex = new RegExp(searchedTitle, 'i');
                query = query.where('title').regex(regex);
                // console.log(`[Query Builder] Applying flexible title filter: /${searchedTitle}/i`);
            }
        }

        if (filter.genre) {
            // 1. Remove excess spaces from the search value
            const searchGenre = String(filter.genre).trim();
            // 2.We create a regular expression for exact matching, without case sensitivity (i)
            // ^ - Start of string
            // $ - End of string
            // This ensures that "Act" will not match "Action"
            const regex = new RegExp(`^${searchGenre}$`, 'i');
            // 3. We apply the filter to the Mongoose query
            query = query.where('genre').regex(regex);
        }

        if (filter.year) {
            // TODO Search by year, exact match, case senstive
            query = query.where('year').equals(filter.year);
        }

        return query;
    },
    getOne(movieID) {
        return Movie.findById(movieID);
    },
    getOneDetailed(movieId) {
        return this.getOne(movieId).populate('casts');
    },
    create(movieData, userId) {
        //movieData.rating = Number(movieData.rating);

        /* const movie = new Movie(movieData);

        return movie.save(); */

        return Movie.create({
            ...movieData,
            rating: Number(movieData.rating),
            creator: userId,
        });
    },
    async attach(movieId, castId) {
        //Attach relation method #1
        /*  const movie = await Movie.findById(movieId);
         movie.casts.push(castId);
         return movie.save(); */

        //Attach relation method #2 MongoDB
        return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
    }

};