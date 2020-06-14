const express = require("express");
const {
  home,
  deleteAllData,
  postHome,
  getOne,
  patchData,
  putData,
  deleteData,
} = require("../controller/controller");
// const { person } = require("../controller/controller");
// const { postHome } = require("../controller/controller");

const route = express.Router();

route.get("/", home);
route.post("/", postHome);
route.delete("/", deleteAllData);
route.get("/:profession", getOne);
route.put("/:profession", putData);
route.patch("/:profession", patchData);
route.delete("/:profession", deleteData);

module.exports = route;
