require('dotenv').config();
require('./config/mongoose.config');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;

app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/user.routes')(app);

app.listen(port, () => console.log('Listening on port: 8000'));