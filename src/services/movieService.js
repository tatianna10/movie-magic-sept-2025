import Movie from "../models/Movie.js";

export default {
    getAll(filter) {
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
            // 1. Премахваме излишните интервали от търсената стойност
            const searchGenre = String(filter.genre).trim();
            // 2. Създаваме регулярен израз за точно съвпадение, без чувствителност към регистъра (i)
            // ^ - Начало на стринга
            // $ - Край на стринга
            // Това гарантира, че "Act" няма да съвпадне с "Action"
            const regex = new RegExp(`^${searchGenre}$`, 'i');
            // 3. Прилагаме филтъра към Mongoose заявката
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
    async create(movieData) {
        movieData.rating = Number(movieData.rating);

        /* const movie = new Movie(movieData);

        return movie.save(); */

        return Movie.create(movieData);

    }
};