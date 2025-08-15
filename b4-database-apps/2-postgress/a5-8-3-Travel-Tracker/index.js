import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db_params = {
  host: "localhost",
  port: 5432,
  database: "pocdb",
  user: "pguser",
  password: "passw0rd725",
};

const dbClient = new pg.Client(db_params);
dbClient.connect();

// read visited countries from DB
const VISITED_COUNTRY_SQL = "SELECT country_code FROM public.visited_countries";
async function checkVisited() {
  const result = await dbClient.query(VISITED_COUNTRY_SQL);
  console.log(`#${result.rowCount} records read using ${VISITED_COUNTRY_SQL}`);

  const vc = [];
  if (result.rowCount > 0) {
    result.rows.forEach((r) => vc.push(r.country_code));
  }
  console.log("Data : " + JSON.stringify(vc));
  return vc;
}

const GET_CCODE =
  "SELECT * from public.countries where lower(country) like $1 || '%'";
const VC_FIND_OLD_REC =
  "select * from public.visited_countries where lower(country_code) = $1";
const VC_ADD_NEW_REC =
  "insert into public.visited_countries (country_code) values ($1)";
async function updateVisited(country) {
  
  // get countrycode for the country name
  let result = await dbClient.query(GET_CCODE, [country.toLowerCase()]);

  let vc = "No country found";
  if (result.rowCount < 1) {
    return vc;
  }
  
  if (result.rowCount > 0) {
    vc = result.rows[0]["short_code"];
  }
  console.log(`Matching country with name : ${country}: ` + JSON.stringify(vc));

  // check if country has been visited
  result = await dbClient.query(VC_FIND_OLD_REC, [vc.toLowerCase()]);
  if(result.rowCount < 1) {
    await dbClient.query(VC_ADD_NEW_REC, [vc.toLowerCase()]);
  }

  vc = await checkVisited();
  console.log("updated visited: " + vc);
  return vc;
}


function resetData() {

}

app.get("/", async (req, res) => {
  //Write your code here.
  resetData();
  const vc = await checkVisited();
  console.log("visited: " + vc);
  res.render("index.ejs", {
    countries: vc,
    total: vc.length,
  });
});

app.get("/add", async (req, res) => {
  res.status(302).redirect("/");
});

app.post("/add", async (req, res) => {
  console.log("New country : " + req.body.country);

  const vc = await updateVisited(req.body.country);

  console.log("visited: " + vc);

  res.status(200).redirect("/");
});

// clear visited countries from DB
const DELETE_VC_T_DATA = "DELETE FROM public.visited_countries";
app.post("/clear", (req, res) => {
  dbClient.query(DELETE_VC_T_DATA);
  console.log("Visited countries data is reset.")
  res.status(200).redirect("/");
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
