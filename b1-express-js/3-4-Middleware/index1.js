import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const form = "/public/index.html";

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + form);
});

app.post("/submit", (req, res) => {
  console.log(req.body)
  res.status(200).sendFile(__dirname + form);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
