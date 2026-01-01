const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const idsSchema = new Schema({
  senderDetails: {
    city: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    type: Object,
    required: true,
  },
  receiversCompanyDetails: {
    city: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    day: { type: String, required: true },
    type: Object,
    required: true,
  },
  depationDateAndTime: {
    time: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    type: Object,
    required: true,
  },
  clDetails: {
    address: {
      type: String,
      required: true,
    },
    packageRecivedDAndT: {
      type: String,
      required: true,
    },
    packageRecivedDay:{
      type: String,
      required: true,
    },
    type: Object,
    required: true,
  },
  packageDetails: {
    weight: {
      type: String,
      required: true,
    },
    pieces: {
      type: String,
      required: true,
    },
    totalWeight: {
      type: String,
      required: true,
    },
    type: Object,
    required: true,
  },
  customesDetails: {
    city: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    type: Object,
    required: true,
  },
  clearanceDetails: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});
const Id = mongoose.model("Id", idsSchema);
module.exports = Id;
