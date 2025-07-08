import * as usersRepository from "../repository/userRepository.js";
import * as vcRepository from "../repository/visitedCountriesRepository.js";
import Response from "../beans/response.js";

const userService = {
  /**
   * Read all users data and all visited country codes
   */
  getAllUserAndAllVisitedCountries: async () => {
    const resp = new Response();
    // read data from DB
    const t = await userService.getAllUsers();
    resp.setUsers(t);

    const countries = await vcRepository.getCountriesVisitedByAllUsers();
    resp.setVisitCount(countries.length);

    let x = [];
    countries.forEach((c) => x.push(c.country_code));
    resp.setCountryCodes(x);

    return resp;
  },

  /**
   * Get all users.
   *
   * @returns All users
   */
  getAllUsers: async () => {
    const t = await usersRepository.getUsers();
    return t;
  },

  /**
   * Get user with provided user id.
   *
   * @param {Number} userId
   * @returns
   */
  getUserById: async (userId) => {
    return await usersRepository.getUserById(userId);
  },

  addNewUser: async function (name, color) {
    return await usersRepository.addNewUser(name, color);
  },

  getVisitedCountriesByUserId: async function (userId) {

    const resp = new Response();
    const countries = await vcRepository.getVisitedCountriesByUserId(userId);
    resp.setVisitCount(countries.length);

    let x = [];
    countries.forEach((c) => x.push(c.country_code));
    resp.setCountryCodes(x);

    //
    const users = await usersRepository.getUsers();
    const c_user = users.filter(u => u.id === userId);
    
    resp.setUserColor(c_user.color);

  },
};

export default userService;
