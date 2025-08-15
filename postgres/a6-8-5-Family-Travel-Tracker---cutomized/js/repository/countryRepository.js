import * as db from "./databae.js";

const FETCH_SHORT_CODE =
  "SELECT country, short_code FROM country WHERE LOWER(country) LIKE $1 || '%';";

const NO_REC_FOUND_ERR = "Not country found with seach text - ";

export async function getFirstMatchingCountryCode(country_name) {
  const res = await db.query(FETCH_SHORT_CODE, [country_name.toLowerCase()]);

  if (res.length > 0) {
    console.debug("Record found : " + JSON.stringify(res[0]));
    return res[0];
  } else {
    console.debug(NO_REC_FOUND_ERR + country_name);
    throw new Error(NO_REC_FOUND_ERR + country_name);
  }
}
