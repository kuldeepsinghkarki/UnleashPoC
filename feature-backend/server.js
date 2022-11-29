var express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const URLencodedParser = bodyParser.urlencoded({ extended: false });

require("dotenv").config();
var cors = require("cors");
var app = express();

const unleash = require("unleash-client");
const tokenname = "Walgreens-festive-discounts";
unleash
  .initialize({
    url: "http://localhost:4242/api",
    appName: process.env.APP_NAME,
    environment: process.env.APP_ENV,
    customHeaders: { Authorization: process.env.FEATURE_SERVER_KEY },
    bootstrap: "./bootStrapFeatures.json"
  })
  .on("error", () => {
    console.log("Failed to connect with Unleash Server ");
  })
  .on("ready", () => {
    console.log("Unleash Server Connection is Ready");
    const festiveFeature = unleash.getFeatureToggleDefinitions();
    unleash.InMemStorageProvider
    console.log(festiveFeature);
  });

let festiveOffers = false;
setInterval(() => {
  // console.log(features);
  if (unleash.isEnabled(tokenname)) {
    console.log(tokenname + " Token is enabled");
    festiveOffers = true;
  } else {
    console.log(tokenname + " Token is not enabled");
    festiveOffers = false;
  }
}, 1000);

const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//var psController = require("./controller.js");

var router = express.Router();
router.get("/v1/public", function (req, res) {
  res.send(
    "This response is from Version v1 with Festive offers :" + festiveOffers
  );
});

const { features } = require("process");
app.use("/ps", router);
app.listen(PORT, () => {
  console.log("Started ps-backend-server at port number " + PORT);
});
