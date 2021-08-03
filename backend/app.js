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

mongoose.connect('mongodb+srv://myself:0000011111@cluster0.oyi4v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(() => console.log('connected'))
.catch(() => console.log('error not connected'));
mongoose.set('useCreateIndex', true);

app.use(morgan('combined', { stream: winston.stream }));
app.use(helmet());
app.use(bodyParser.json());

