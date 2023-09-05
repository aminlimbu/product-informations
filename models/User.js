const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});

// Plugin, handles username, hash password and salt value
UserSchema.plugin(passportLocalMongoose);

module.exports = new mongoose.model("User", UserSchema);
