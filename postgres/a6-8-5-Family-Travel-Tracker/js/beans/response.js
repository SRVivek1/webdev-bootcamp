/**
 * Default response structure for http response.
 */

function Response() {
  return {
    users: [],
    activeUser: -1,
    c_codes: [],
    c_count: 0,
    u_color: "teal",

    setUsers: function (users) {
      this.users = users;
    },
    setActiveUser: function (actUser) {
      this.activeUser = actUser;
    },
    setCountryCodes: function (ccodes) {
      this.c_codes = ccodes;
    },
    setVisitCount: function (ccount) {
      this.c_count = ccount;
    },
    setUserColor: function (color) {
      this.u_color = color;
    },
  };
}

export default Response;
