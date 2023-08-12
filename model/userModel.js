import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: String,
    username: String,
    email: String,
    dob: Date,
    age: Number,
    gender: String
})

const User = model("user", userSchema);

export default User;