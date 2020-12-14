import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: String,
    text: String,
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
