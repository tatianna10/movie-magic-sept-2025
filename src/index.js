import express from 'express';
import handlebars from 'express-handlebars';
import routes from './routes.js';


const app = express();

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Setup middlewares
app.use(express.static('src/public')); //Setup static middleware
app.use(express.urlencoded()); //Parse form data from request
// Routes
app.use(routes);


// Start Server
app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));