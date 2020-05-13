const mongoose = require("mongoose");

const Stadiums = require("Stadiums");
const HostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  stadiums: {
    Stadiums,
  },
});

const Hosts = mongoose.model("Hosts", HostSchema);

module.exports = Hosts;
