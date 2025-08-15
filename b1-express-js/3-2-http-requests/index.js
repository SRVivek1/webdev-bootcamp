import express from "express";

const app = express();
const port = 4000;


// request controllers
app.get("/", (req, res) => {
    console.log(`\nProcessing request: ${req.url}`);
    console.log(`Request : \n ${req.rawHeaders}`);
    res.send("<h1>Home Page</h1>");
});


app.post("/register", (req, res) => {
    console.log(`\nProcessing request: ${req.url}`);
    console.log(`Request : \n ${req.rawHeaders}`);
    res.status(201).send("<p>Registration successful.</p>");
});

app.put("/user/vivek", (req, res) => {
    console.log(`\nProcessing request: ${req.url}`);
    console.log(`Request : \n ${req.rawHeaders}`);
    res.status(200).send("<p>User details replaced.</p>");
});

app.patch("/user/vivek", (req, res) => {
    console.log(`\nProcessing request: ${req.url}`);
    console.log(`Request : \n ${req.rawHeaders}`);
    res.status(200).send("<p>User details updated.</p>");
});


app.delete("/user/vivek", (req, res) => {
    console.log(`\nProcessing request: ${req.url}`);
    console.log(`Request : \n ${req.rawHeaders}`);
    res.status(200).send("<p>User deleted.</p>");
});

 // start the server
app.listen(port, () => {
    console.log(`Server started on port - ${port}.`)
});