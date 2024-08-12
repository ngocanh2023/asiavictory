const path = require("path");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
const jsonParser = bodyParser.json();
app.use(jsonParser);

const userRegister = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static("public"))

app.use(express.json());

app.use(userRegister);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found on the server</h1>");
});

const mongooseUrl =
  `mongodb+srv://ngocanhmongoose:paBoXKtjMbZQ5fR3@cluster0.hshales.mongodb.net/avec`;

const mongoose = require('mongoose');
mongoose.connect(mongooseUrl);
mongoose.Promise = global.Promise;
let dB = mongoose.connection;

dB.on('error', console.error.bind(console, 'Connect to mongo failed'));
//===============================
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
