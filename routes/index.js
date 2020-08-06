//#region > Imports
//> Express
// Node.js Framework used to build web applications and APIs
const express = require("express");

//> Services
// Shopify Service
const foo = require("../services/foo.js");
//#endregion

//#region > Routes
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/foo", (req, res) => {
  foo
    .getFoo(req.body.foo)
    .then((foos) => {
      res.status(200).send(foos);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
//#endregion

//#region > Exports
module.exports = router;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
