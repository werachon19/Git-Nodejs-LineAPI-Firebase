/**
 * @author Werachon Phunta
 * @create date 2019-08-04 11:36:00
 * @desc A Sample project of Node.js and Line API
 */
const server = require('express');
const PORT = process.env.PORT || 9999;
const request = require('request');
const bodyParser = require('body-parser');

server()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false}))
    .get('/', (req, res) => res.send(`Hi there this is a nodejs-line-api running on PORT: ${ PORT }`))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));