import * as db from "./databae.js";

const GET_C_CODE = "SELECT country_code FROM visited_countries";

const GET_C_CODE_FOR_UID = "SELECT country_code FROM visited_countries WHERE user_id = $1";

const ADD_NEW_ENTRY = "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)";


export async function getCountriesVisitedByAllUsers() {
  return await getVisitedCountriesByUserId();
}

/**
 * Countries visited by users.
 * 
 * @param {String} user_id 
 * @returns 
 */
export async function getVisitedCountriesByUserId(user_id) {

  let result;
  if(user_id){
    result = await db.query(GET_C_CODE_FOR_UID, [user_id.toLowerCase()]);
  } else {
    result = await db.query(GET_C_CODE);
  }
  
  console.debug("Visited Countries : " + JSON.stringify(result));
  
  return result;
}


/**
 * Add entry of new visited country.
 * 
 * @param {String} params 
 */
export async function addNewCountry(country, user_id) {
  await db.query(ADD_NEW_ENTRY, [country, user_id]);
}

//export default {checkVisisted}
