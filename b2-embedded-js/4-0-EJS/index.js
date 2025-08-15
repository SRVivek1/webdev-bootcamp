import express from "express";
import ejs from "ejs";

const app = express();
const port = 4000;

app.get("/", (req, res) => {
    let d = new Date();
    // d = new Date('2025-04-13'); // testing weekend
    const today = d.getDay();

    let advice = "work hard!";
    let dayType = "a weekday";
    if(today === 6 || today === 0) {
        dayType = "the weekend";
        advice = "have fun!";
    }
    res.render("index.ejs", {day: dayType, message: advice});
});


app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})