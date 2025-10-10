import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    const movieData = req.body;
    movieService.create(movieData);

    res.redirect('/');
});

movieController.get('/:movieID/details', (req, res) => {
    const movieId = req.params.movieID;
    console.log(movieId);

    res.end();


});

export default movieController;