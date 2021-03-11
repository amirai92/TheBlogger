const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const post = require("./post");
s;
const user = require("./user");
const initDB = require("./db");

async function initServer() {
  const db = await initDB();
  const { ROUTE_PATH, init: initUser } = user;

  const app = express();

  //middleware for parsing the http body and cookie header
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use(ROUTE_PATH, initUser(db));
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
  });
}

initServer().then(() => {
  console.log("exiting");
});
