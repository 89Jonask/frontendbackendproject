import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: String,
    telephone: String,
    email: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);
export default UserModel;
