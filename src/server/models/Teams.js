import mongoose from "mongoose";

import Users from "./Users";

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  agent: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  teamMate: [Users],
  teamRegistration: [Users],
  Fan: [Users],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Teams = mongoose.model("Team", TeamSchema);

export default Teams;
