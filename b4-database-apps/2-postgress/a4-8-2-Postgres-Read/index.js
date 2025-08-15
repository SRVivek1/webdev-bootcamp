import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db_params = {
  hostname: "localhost",
  port: 5432,
  database: "pocdb",
  user: "pguser",
  password: "passw0rd725",
};

let db = new pg.Client(db_params);

db.connect();

let quiz = [];
const quiz_sql = 'select c.country, c.capital, f.flag from capitals c inner join flag f on f."name" = c.country;';
db.query(quiz_sql, (err, res) => {
  if(err) {
    console.error("Error reading data from DB Tables. Reason: " + err.message);
    console.error(err.stack);
  } else {
    console.info("Records read from DB #" + res.rowCount);
    quiz = res.rows;
  }
});


let currentQuestion = {};

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  nextQuestion();
  res.render("index.ejs", { question: currentQuestion });
});

//redirect to home
app.get("/submit", (req, res) => {
  res.status(302).redirect("/");
});


// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.trim().toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(`Current score : ${totalCorrect}`);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
  console.log(currentQuestion);
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
