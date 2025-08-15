import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlForm = "/public/index.html";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + htmlForm);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  
  var bandName = req.body.street + req.body.pet + ` &#9996;`;
  console.log(`Bandname : ${bandName}`);

  res.status(200).send(`<h1>Bandname : ${bandName} </h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


