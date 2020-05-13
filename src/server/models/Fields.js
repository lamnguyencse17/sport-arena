const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    // Map is object with key is a string and value OF: ARRAY
    type: Map,
    of: Array,
  },
});

const Fields = mongoose.model("Fields", FieldSchema);

module.exports = Fields;
