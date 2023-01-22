'use strict';

// load package
const express = require('express');
const bodyParser = require("body-parser");

const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
 
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sayHello', (req,res) => {
        var name = req.body.name;
        var answer = "hello " + name;

         
         res.send(answer);
   });

 app.use('/', express.static('pages'));

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);