const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema();
UserSchema.add({
  id: {
    type: Number,
    required: true,
  },
  first_name: {
    type: String,
    required: false,
  },
  last_name: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  language_code: {
    type: String,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
