const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});

// passport middleware for username and password schema
// salt and hash password
UserSchema.plugin(passportLocalMongoose);

module.exports = new mongoose.model("User", UserSchema);
