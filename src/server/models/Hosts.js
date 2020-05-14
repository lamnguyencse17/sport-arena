import mongoose from 'mongoose'

import Stadiums from ('./Stadiums');
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

export default Hosts;
