const { userSchema } = require("../model/model");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const Person = mongoose.model("Person", userSchema);

const home = (req, res) => {
  Person.find(function (err, data) {
    if (data) {
      res.send(data);
    } else res.send("err fetching data", err);
  });
};
const postHome = (req, res) => {
  const newPost = new Person({
    profession: req.body.profession,
    name: req.body.name,
    phoneNo: req.body.phoneNo,
    email: req.body.email,
  });
  newPost.save((err) => {
    if (!err) {
      res.send("<h1>Successfully added</h1>");
    } else
      res.status(400).json({
        error: err,
      });
  });
};
const deleteAllData = (req, res) => {
  Person.deleteMany((err) => {
    if (!err) {
      res.send("allData cleared");
    } else {
      res.send("err clearing data", err);
    }
  });
};
//dealing with one unique data
const getOne = (req, res) => {
  Person.findOne({ profession: req.params.profession }, (err, foundData) => {
    if (foundData) {
      res.send(foundData);
    } else {
      res.send(err);
    }
  });
};
const putData = (req, res) => {
  Person.update(
    { profession: req.params.profession },
    {
      profession: req.body.profession,
      name: req.body.name,
      phoneNo: req.body.phoneNo,
      email: req.body.email,
    },
    { overwrite: true },
    (err) => {
      if (!err) {
        res.send("data replaced");
      } else {
        res.send(err);
      }
    }
  );
};

const patchData = (req, res) => {
  Person.updateOne(
    { profession: req.params.profession },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.send("content updated");
      } else {
        res.send(err);
      }
    }
  );
};

const deleteData = (req, res) => {
  Person.deleteOne({ profession: req.params.profession }, (err) => {
    if (!err) {
      res.send("data deleted");
    } else {
      res.send("error deleting data", err);
    }
  });
};

module.exports = {
  home,
  deleteAllData,
  postHome,
  getOne,
  patchData,
  putData,
  deleteData,
};
