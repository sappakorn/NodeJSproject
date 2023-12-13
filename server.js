const express = require("express");
const app = express();
const mysql = require('mysql');
const _ = require('lodash');

const server = app.listen(3010, ()=>{
     console.log('Node.js 3010');
})

module.exports = app;
