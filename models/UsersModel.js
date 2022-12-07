import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
}, { timestamps: true });


const User = mongoose.model('User', userSchema);


export default User;

