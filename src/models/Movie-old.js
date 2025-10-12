import { v4 as uuid } from 'uuid';
import fs from 'fs/promises';
//import { log } from 'console';
//import { json } from 'stream/consumers';


let dbSerialized = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
let db = JSON.parse(dbSerialized);


export default class Movie {
    constructor(data) {
        Object.assign(this, data);
        this._id = uuid();
    }

    static find(filter = {}) {   //return array
        let result = db.movies.slice();
        if (filter._id) {
            result = db.movies.filter(movie => movie._id === filter._id);
        }

        if (filter.title) {
            // Get the normalized search term once (lowercase and trimmed)   //TODO Search by title, partial match, case insensitive
            const searchTitle = filter.title.toLowerCase().trim();
            result = result.filter(movie =>
                movie.title.toLowerCase().trim().includes(searchTitle)
            );
        }

        if (filter.genre) {
            //TODO Search by genre, exact match, cane insensitive
            if (filter.genre) {
                const searchGenre = filter.genre.toLowerCase().trim();
                result = result.filter(movie =>
                    movie.genre.toLowerCase() === searchGenre
                );
            }
        }

        if (filter.year) {
            //TODO Search by year, exact match
            if (filter.year) {
                const searchYear = filter.year.trim(); // Trim the search year input
                result = result.filter(movie => movie.year === searchYear);
            }


        }
        return result;
    }

    static findOne(filter = {}) {  //return object
        let result = db.movies[0];

        if (filter._id) {
            result = db.movies.find(movie => movie._id === filter._id);
        }
        return result;
    }

    get id() {
        return this._id;
    };

    async save() {
        db.movies.push(this);

        const dbSerialized = JSON.stringify(db, null, 2);

        await fs.writeFile('./src/db.json', dbSerialized);

        return this;
    }
}