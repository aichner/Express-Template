//#region > Imports
// Request is designed to be the simplest way possible to make http calls
const request = require("request");
//#endregion

//#region > Functions
// Get all foos
function getFoo() {
  return new Promise((resolve, reject) => {
    /*request.get(
      `https://www.foo.com`,
      (error, response, body) => {
        if (error != null) {
          reject("Error receiving foos: " + error);
        } else {
          resolve(body);
        }
      }
    );*/
  });
}
//#endregion

//#region > Exports
module.exports.getFoo = getFoo;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
