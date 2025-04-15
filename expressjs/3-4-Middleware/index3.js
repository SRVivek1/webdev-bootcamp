import express from "express";

const app = express();
const port = 3000;

const logger = function (req, res, next) {
  
  console.log(req + `\n`);

  var msg = `${req.method} ${req.url}`;

  console.log(msg)
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
