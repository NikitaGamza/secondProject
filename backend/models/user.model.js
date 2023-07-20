import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    quote: { type: String },
  },
  { collection: 'user-data' } //name of collection in mongo
);

const User = mongoose.model('User', userSchema);

export default User;
