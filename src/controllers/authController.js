import { Router } from "express";
import userService from "../services/userService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    const userData = req.body;

    await userService.register(userData);

    res.redirect('/login');
});

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await userService.login(email, password);

    //Attache token to cookie
    res.cookie('auth', token); //cookie name is auth, to it will be attached a token

    res.redirect('/');

});

export default authController;