import express, {Application, Response, Request, NextFunction} from 'express';
import * as controller from './control'
const url = require('url');

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("welcome");
});

app.get('/', controller.hi);
app.get('/sum', controller.sum);
app.post('/hello', controller.hello);

app.listen(process.env.PORT || 5000, () => console.log("running at http://localhost5000 or http://ilhan-test-1.herokuapp.com"));