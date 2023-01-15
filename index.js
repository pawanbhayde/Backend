// Create a folder for backend 
// open this folder with vs code
// and run `npm init` in command prompt
// create index.js file

// Initialize Packages

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// if true -> Nested Object(correct)
// false -> Nested Object(incorrect)

const Note = require('./models/Note')

mongoose.connect('mongodb://pawan:pawan090@ac-ucgcsoc-shard-00-00.eczktpi.mongodb.net:27017,ac-ucgcsoc-shard-00-01.eczktpi.mongodb.net:27017,ac-ucgcsoc-shard-00-02.eczktpi.mongodb.net:27017/?ssl=true&replicaSet=atlas-b3ddn4-shard-0&authSource=admin&retryWrites=true&w=majority').then(function () {
    app.get('/', function (req, res) {
        res.send("This is the Home Page");
    });

    const noteRouter = require('./routes/Note');
    app.use('/notes', noteRouter);
});

const PORT = process.env.PORT || 5000;
// Starting the server on a PORT
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
//  run `node index.js` command to run localhost/5000 server