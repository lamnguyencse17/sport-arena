import mongoose from "mongoose";
import Fields from "./Fields";

const StadiumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: Map, // Map is object with key is a string and value OF: ARRAY
    of: Array,
  },
  fields: [Fields], // get number by using count
});

const Stadiums = mongoose.model("Stadiums", StadiumSchema);

export default Stadiums;
