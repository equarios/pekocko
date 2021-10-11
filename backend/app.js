const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const winston = require('./monitoring/config/winston');
const helmet = require('helmet');

// connect to mongodb db server by mongoose
mongoose.connect('mongodb+srv://myself:0000011111@cluster0.oyi4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log('connected'))
.catch(() => console.log('error not connected'));
mongoose.set('useCreateIndex', true);
//using middleware in app
app.use(morgan('combined', { stream: winston.stream }));
app.use(helmet());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
//posting data to paths
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;