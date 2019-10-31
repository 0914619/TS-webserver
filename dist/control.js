"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require('url');
var http = require('http');
exports.hi = function (req, res) {
    res.send("hello, there"); // shows "hello there" when you enter /hi behind the host
};
exports.hello = function (req, res) {
    res.send("how are you?"); // shows "how are you" when you enter /hello behind the host
};
exports.sum = function (req, res) {
    for (var key in req.query) {
        console.log(key, req.query[key]);
        //req.query.iets;
        // req.query.niets;
        var a = Number(req.query.iets);
        var b = Number(req.query.niets);
        console.log(a, " + ", b, " = ", a + b);
    }
};
