const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
	id: String,
	username: String,
	password: String,
});

const UserModel = model("users", UserSchema);
module.exports.UserModel = UserModel;
