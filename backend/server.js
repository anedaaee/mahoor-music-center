const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require("helmet");
const passport = require('passport');

require('dotenv').config();
//require('./middleware/passport')


const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended : false }));
server.use(helmet());
server.use(cors());
server.use(cookieParser());



server.listen(process.env.PORT, () => {
    console.log('Server is up on port ' + process.env.PORT);
})