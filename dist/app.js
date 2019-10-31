"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller = __importStar(require("./control"));
var url = require('url');
var app = express_1.default();
app.get("/", function (req, res, next) {
    res.send("welcome"); // default begin screen prints welcome
});
app.get('/', controller.hi); // executes hi from controller if you enter "/" behind the host
app.get('/sum/', controller.sum); // executes sum from controller if you enter "/sum" behind the host
app.get('/hello', controller.hello); //in post man change the setter from get to post enter /hello behind the host and it wil execute  hello from  controller
app.listen(process.env.PORT || 5000, function () { return console.log("running at http://localhost:5000 or http://ilhan-test-1.herokuapp.com"); }); // chooses a port or 5000 if non are available, prints the possible links on where the application is running
