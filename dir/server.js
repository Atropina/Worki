"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send("ooioi");
});
app.listen(2021, function () {
    console.log("Running");
});
