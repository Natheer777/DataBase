const express = require("express");
const pool = require("./Config/Dbnode");
const route = require("./Routers/Route");
const bodyparser = require("body-parser");
const App = express();
App.use(bodyparser.json());
App.use(bodyparser.urlencoded({ extended: true }));
App.use(route);
App.listen(3000, () => {
  console.log("server is running");
});
