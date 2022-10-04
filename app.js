const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./src/routes/rest-routes");

const port = 3000;
const environment = "";

const app = express();

mongoose.connect("mongodb://localhost:27017/example", {
  useNewUrlParser: true,
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const httpLogReq =
  environment === "production" ? morgan("combined") : morgan("dev");

app.use(httpLogReq);

app.use(routes);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
