import { Schema, model } from "mongoose";

const collection = "users";

const userSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    photo: {type: String},
    phone: {type: Number, trim: true},
    password: {type: String, required: true,},
    online: {type: Boolean, default: false}
}, {
    timestamps: true,
})

const User = model(collection, userSchema);

export default User