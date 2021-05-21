import mongoose from 'mongoose';

const {Schema} = mongoose;

const userSchema = new Schema({
  username: {type: String, required: true},
  imageLinks: [String],
  balance: {type: Number, default: 0},
});

const Users = mongoose.model('Users', userSchema);
export default Users;
