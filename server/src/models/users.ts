import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fn: String,
  age: Number,
});

export const User = mongoose.model('User', userSchema);
