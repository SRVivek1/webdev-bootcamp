//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import {dirname} from "path";

const app = express();
const port = 4000;
const __dirpath = dirname(fileURLToPath(import.meta.url));
const loginPage = __dirpath + "/public/index.html";
const secretPage = __dirpath + "/public/secret.html";
let isAuthorized = false;

app.use(bodyParser.urlencoded({extended: true}));


//authenticator
function authenticate(req, res, next) {
    const password = req.body["password"];
    if(password === "ILoveProgramming") {
        isAuthorized = true;
    }
    next();
}

app.use(authenticate);

app.get("/", (req, res) => {
    res.status(200).sendFile(loginPage);
});


// API with authentication
// app.post("/check", (req, res) => {
//     const data = req.body;
//     if(data.password !== 'ILoveProgramming') {
//         res.status(401).sendFile(loginPage);
//     } else {
//         res.status(200).sendFile(secretPage);
//     }
// });


app.post("/check", (req, res) => {
    const data = req.body;
    if(!isAuthorized) {
        res.status(401).sendFile(loginPage);
    } else {
        isAuthorized = false;
        res.status(200).sendFile(secretPage);
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`)
})