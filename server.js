const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const route = require("./route/route");
const { userSchema } = require("./model/model");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/home", route);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to dataBase"))
  .catch((err) => console.log("dataBase connection error", err));

const Person = mongoose.model("Person", userSchema);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
