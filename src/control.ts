import {Response, Request} from "express";
const url = require('url');
const http = require('http');

export let hi =(req: Request, res: Response) => {
    res.send("hello, there"); // shows "hello there" when you enter /hi behind the host
};

export let hello =(req: Request, res: Response) => {
    res.send("how are you?"); // shows "how are you" when you enter /hello behind the host
};

export let sum =(req: Request, res: Response) => {

    for (const key in req.query) {
        console.log(key, req.query[key]);
        //req.query.iets;
       //req.query.niets;
        let a = Number(req.query.iets);
        let b = Number(req.query.niets);
        console.log(a," + ", b, " = ", a + b);
}};
