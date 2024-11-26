import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['user', 'admin']},
  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }]  // Referencia a mascotas
});

const User = mongoose.model('User', userSchema);
export default User;
