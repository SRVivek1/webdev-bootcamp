import * as db from "./databae.js";

const FETCH_ALL_USERS = "select * from users";
const FETCH_USER_BY_ID = "select * from users WHERE user_id = $1";

const ADD_NEW_USER = "INSERT INTO USERS (name, color) values ($1, $2)";

export async function getUsers() {
  const result = await db.query(FETCH_ALL_USERS);

  console.debug("Users data from DB : " + JSON.stringify(result));
  return result;
}

/**
 * Find user by user id.
 * 
 * @param {Number} userId 
 * @returns 
 */
export async function getUserById(userId) {
  const result = await db.query(FETCH_USER_BY_ID, [userId]);

  console.debug("Users data from DB : " + JSON.stringify(result));

  return result;
}

export async function addNewUser(name, color) {
  await db.query(ADD_NEW_USER, [name, color]);
}

//export default {getUsers}
