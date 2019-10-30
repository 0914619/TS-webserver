import {Response, Request} from "express";
const url = require('url');

const reqUrl = 'http://ilhan-test-1.herokuapp.com/?a=9&b=-10';
const urlObject = url.parse(reqUrl, true);
console.log(urlObject.host);
console.log(urlObject.search);

const queryData = urlObject.query;

const add = (a:number, b:number): number => a + b;

export let hi =(req: Request, res: Response) => {
    res.send("hello, there");
};

export let hello =(req: Request, res: Response) => {
    res.send("how are you?");
};

export let sum =(req: Request, res: Response) => {

    res.send("9 + 10 = " + add(9,-10));
};