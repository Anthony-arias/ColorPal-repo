const cors = require('cors');
const express = require('express');
const app = express();
require('./config/mongoose.config');
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//require('./server/routes/author.routes')(app);

app.listen(port, () => console.log('Listening on port: 8000'));