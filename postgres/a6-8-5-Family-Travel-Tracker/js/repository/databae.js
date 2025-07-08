import pg from "pg";

let isInitialized = false;
let db;

const conn_params = {
  user: "pguser",
  host: "localhost",
  database: "pocdb",
  password: "passw0rd725",
  port: 5432,
};

async function init() {
  db = new pg.Client(conn_params);

  try {
    await db.connect();
    isInitialized = true;
    console.log("Db connection established.");
  } catch (err) {
    console.error("Error connecting to database. Reason: " + err.message);
    throw err;
  }
}

/**
 * initialize DB client.
 */
export async function initialize() {
  if (!isInitialized) {
    await init();
  }
}

// initalise DB connection
initialize();

/**
 * Executes sql query with optional positional parameters.
 *
 * @param {String} sql The SQL query to execute.
 * @param {Array} params An optional array of positional parameters for the query.
 */
export async function query(sql, params) {
  if (!isInitialized || !db) {
    console.error("Database not initialized.");
    throw new Error("Database not initialized.");
  }

  let result = [];
  try {
    let resPromise;
    if (params) {
      resPromise = await db.query(sql, params);
    } else {
      resPromise = await db.query(sql);
    }

    resPromise.rows.forEach((element) => {
      result.push(element);
    });
    return result;
  } catch (error) {
    console.error("Error proessing query on DB. Reason : " + error.message);
    throw error;
  }
}

export async function closeDB() {
  if (isInitialized && db) {
    try {
      await db.end();
      console.log("Database connection closed.");
      isInitialized = false;
      db = undefined;
    } catch (error) {
      console.error("Error closing the database connection:", error.message);
      throw error;
    }
  }
}

//export default { initialize, query, closeDB };
