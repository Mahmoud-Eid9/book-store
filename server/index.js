require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/mainRouter');
const app = express();
const pool = require('./config/db_config');


app.use(cors());
app.use(express.json());
app.use(mainRouter);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.listen(8000, async () => {
    console.log("listening on 8000.....")
});