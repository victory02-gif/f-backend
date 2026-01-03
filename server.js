require('dotenv').config()
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const Id = require("./models/ids");
const app = express();
//conect to mongodb
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
 

//database connnection
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_URL)
  .then((e) => {
    console.log("Connected to data base");
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  });
//
//mongoose routes
app.post("/user/save", async (req, res) => {
  const data = await req.body;
  if (data) {
    try {
      const ids = await new Id({
        senderDetails: {
          city: data.senderDetails.city,
          date: data.senderDetails.date,
          time: data.senderDetails.time,
        },
        receiversCompanyDetails: {
          city: data.receiversCompanyDetails.city,
          date: data.receiversCompanyDetails.date,
          time: data.receiversCompanyDetails.time,
          day: data.receiversCompanyDetails.day,
        },
        depationDateAndTime: {
          time: data.depationDateAndTime.time,
          day: data.depationDateAndTime.day,
        },
        clDetails: {
          address: data.clDetails.address,
          packageRecivedDAndT: data.clDetails.packageRecivedDAndT,
          packageRecivedDay: data.clDetails.packageRecivedDay
        },
        packageDetails: {
          weight: data.packageDetails.weight,
          pieces: data.packageDetails.pieces,
          totalWeight: data.packageDetails.totalWeight,
        },
        customesDetails: {
          city: data.customesDetails.city,
          date: data.customesDetails.date,
          time: data.customesDetails.time,
          day: data.customesDetails.day,
        },
        contact: data.contact, 
        clearanceDetails: data.clearanceDetails,
        id: data.id,
      });
      const respond = await ids.save();
      if (respond) {
        res.status(201).json({ status: 201, message: "Succesfully added ID" });
      }
    } catch (error) {
      console.log(error);
    }
  }
});
//main page
app.get("/", (req, res) => {
  res.render("f-tracking");
});
//validate id
app.post("/tnidc", async (req, res) => {
  const id = Number(req.body.id);
  if (id) {
    //
    try {
      const respond = await Id.find({ id: id });
      if (respond.length !== 0) {
        res.status(200).json({ status: 200, message: "sucessfull" });
      } else {
        res
          .status(404)
          .json({ status: 404, message: "No Tracking number found" });
      }
    } catch (error) {}
  } else {
    res.status(404).json({ status: 404, message: "Invalid Tracking ID" });
  }
});
//login page
app.get("/login", (req, res) => {
  res.render("f-login");
});
//get id details display
app.get("/tracking/:id", (req, res) => {
  const id = req.params.id;
  res.render("f-tracking-details", { id: id });
});
//user
app.get("/user", (req, res) => {
  res.render("f-login-u");
});
//get id details
app.get("/:id/details", async (req, res) => {
  const id = Number(req.params.id);
  if (id) {
    //
    try {
      const responds = await Id.find({ id: id });
      if (responds.length !== 0) {
        res.status(200).json(responds);
      } else {
        res
          .status(404)
          .json({ status: 404, message: "No Tracking number found" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).json({ status: 404, message: "Invalid Tracking ID" });
  }
});
//get id user
app.get("/g/tracking/id", async (req, res) => {
  //
  try {
    const responds = await Id.find();
    if (responds.length !== 0) {
      res.status(200).json(responds);
    } else {
      res
        .status(200)
        .json({ status: 404, message: "No Tracking number found" });
    }
  } catch (error) {
    console.log(error);
  }
});
//save id details

//delete id
app.delete("/tracking/d/:id", async (req, res) => {
  const id = req.params.id;
  if (id) {
    const responds = await Id.deleteOne({ id: id });
    if (responds.acknowledged) {
      res
        .status(200)
        .json({ status: 200, message: `Successfuly deleted : ${id}` });
    }
  }
});
//
app.post("/p/v", async (req, res) => {
  const data = await req.body;
  const password = 869429;
  const id = 869429;
  const uPassword = Number(data.uID);
  const uID = Number(data.uP);
  if (uPassword && uID) {
    if (password === uPassword && id === uID) {
      res
        .status(200)
        .json({ status: 200, validation: true, url: "/user/43582" });
    } else {
      res.status(200).json({
        status: 404,
        validation: false,
        message: "Wrong password or ID",
      });
    }
  } else {
    res.status(200).json({
      status: 404,
      validation: false,
      message: "Wrong password or ID",
    });
  }
});
app.get("/user/43582", (req, res) => {
  res.render("f-login-u");
});
//ping to stay awake
app.get('/keep/awake',(req, res)=>{
  res.sendStatus(200);
})
