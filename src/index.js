import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';

const app = express();

//Setup Database
const url = 'mongodb://localhost:27017';

try {
    await mongoose.connect(url, {
        dbName: 'movie-magic-sept2025',
    });
    console.log('Successfully connected to DB!');

} catch (err) {
    console.log('Cannot connect to DB', err.message);

}

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    }
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