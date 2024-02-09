const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors());

dotenv.config({path: './config.env'});
require('./database/connection');

app.use(require('./router/auth'));

// const user = require('./model/userSchema');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})