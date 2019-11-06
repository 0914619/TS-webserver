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
    console.log(req.query.iets);
    console.log(req.query.niets);
    var a = Number(req.query.iets);
    var b = Number(req.query.niets);
    var add = a + b;
    console.log(a, "  +  ", b, "  =  ", add);
    res.send(a + "+" + b + "=" + add);
};
exports.loop = function (req, res) {
    for (var key in req.query) {
        // console.log(Number(req.query[key]));
        console.log([Number(req.query[key])].reduce(function (a, b) { return a + b; }, 0));
        //console.log(Number(req.query.a));
        //res.send([key]); // shows "how are you" when you enter /hello behind the host
    }
};
