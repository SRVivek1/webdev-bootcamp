import pg from "pg";

const db_params = {
    host: "localhost",
    port: 5432,
    database: "pocdb",
    user: "pguser",
    password: "passw0rd725"
};

const dbClient = new pg.Client(db_params);

dbClient.connect();

dbClient.query("SELECT * FROM capitals LIMIT 10", (err, res) => {
    if(err){
        console.log("Error executing query. Reason: " + err.stack);
    } else {
        console.log(res.rows);
    }
    dbClient.end();
});