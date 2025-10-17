import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    const userData = req.body;

    await authService.register(userData);

    res.redirect('/auth/login');
});

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const token = await authService.login(email, password);

    //Attache token to cookie
    res.cookie('auth', token); //cookie name is auth, to it will be attached a token

    res.redirect('/');
});

authController.get('/logout', (req, res) => {
    //Clear auth cookie
   res.clearCookie('auth');

   // BONUS: invalidate JWT token


    res.redirect('/');
});

export default authController;