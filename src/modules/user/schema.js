import mongoose from 'mongoose'

const Userchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lasName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String},
})

export default mongoose.model.User || mongoose.model('User', Userchema)