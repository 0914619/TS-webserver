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

    console.log(req.query.iets);
    console.log(req.query.niets);
    let a = Number(req.query.iets);
    let b = Number(req.query.niets);
    const add = a + b;
    console.log(a,"  +  ", b, "  =  ", add);
    res.send(a + "+" +b+ "=" +add);

};


export let loop =(req: Request, res: Response) => {

    for(const key in req.query) {
        console.log(Number(req.query[key]));
        console.log(
            Number = req.query[key].reduce((a, b) => a + b, 0)
        )

        //console.log(Number(req.query.a));

        //res.send([key]); // shows "how are you" when you enter /hello behind the host
    }



};