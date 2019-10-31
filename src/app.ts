import express, {Application, Response, Request, NextFunction} from 'express';
import * as controller from './control'
const url = require('url');

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("welcome"); // default begin screen prints welcome
});

app.get('/', controller.hi); // executes hi from controller if you enter "/" behind the host
app.get('/sum/', controller.sum); // executes sum from controller if you enter "/sum" behind the host
app.get('/hello', controller.hello); //in post man change the setter from get to post enter /hello behind the host and it wil execute  hello from  controller

app.listen(process.env.PORT || 5000, () => console.log("running at http://localhost:5000 or http://ilhan-test-1.herokuapp.com")); // chooses a port or 5000 if non are available, prints the possible links on where the application is running