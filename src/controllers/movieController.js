import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const movieData = req.body;
    await movieService.create(movieData);

    res.redirect('/');
});

movieController.get('/:movieID/details', async (req, res) => {
    
    const movieId = req.params.movieID;
    const movie = await movieService.getOne(movieId);

    //TODO Prepare view data  (temp solution)
    const ratingViewData = '&#x2605;'.repeat(Math.trunc(movie.rating));  //or Math.floor can be used

    res.render('details', { movie, rating: ratingViewData });

});

movieController.get('/search', async (req, res) => {
    const filter = req.query;

    const movies = await movieService.getAll(filter);

    res.render('search', { movies, filter, pageTitle: 'Search Movies' });
});

export default movieController;