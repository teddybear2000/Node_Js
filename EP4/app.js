const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');//can't yo use
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/",(req,res) =>{

    res.send('hi jigsaw');
})

app.listen(port, ()=>{
    debug("Listening on port %d" + chalk.green(" : "+port));
})

