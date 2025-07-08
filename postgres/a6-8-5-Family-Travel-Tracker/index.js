import express from "express";
import bodyParser from "body-parser";
import * as httpMware from "./js/utils/httpLogger.js";
import userService from "./js/services/UserService.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Log Http messages
app.use(httpMware.httpLogger);

let currentUserId = 1;

/**
 * Load page with data from DB.
 */
app.get("/", async (req, res) => {
  const resp = await userService.getAllUserAndAllVisitedCountries();

  console.log(`Response: ${JSON.stringify(resp)}`);

  res.render("index.ejs", { ...resp });
});

/**
 * Add new users and Show contries visitded by the user.
 */
app.post("/user", async (req, res) => {
  // Add new user form.
  if (req.body["add"] === "new") {
    res.render("new.ejs");
  } else if (req.body["user"]) {
    const resp = userService.getVisitedCountriesByUserId(req.body["user"]);
    res.render("index.ejs", { ...resp });
  }
});

/**
 * Add new family member.
 */
app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html

  // add new user
  userService.addNewUser(req.body["name"], req.body["color"]);
  res.redirect("/");
});

/**
 * Add new country
 */
app.post("/add", async (req, res) => {
  const country_name = req.body["country"];
  const userId = req.body["userId"];

  try {
    const data = await country.getFirstMatchingCountryCode(country_name);
    try {
      await visitedCountries.addNewCountry(data.short_code, userId);

      // read visited country for the user
      const countries = await visitedCountries.checkVisisted(userId);
      let c_codes = [];
      countries.forEach((e) => {
        c_codes.push(e.country_code);
      });

      // read colors from users
      const tusers = await usersRepository.getUsers();

      let tcolor = tusers.filter((u) => {
        if (u.user_id === userId) {
          return u.color;
        }
      });

      //all users
      const users = await usersRepository.getUsers();
      res.render("index.ejs", {
        countries: c_codes,
        total: countries.length,
        users: users,
        activeUser: userId,
        color: tcolor,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
