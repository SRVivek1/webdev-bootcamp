import express from "express";

const app = express();

const port = 4000;

// Controller
app.get("/", (req, res) => {
    res.send("Hello World !!");
});

// listen to a port
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})

