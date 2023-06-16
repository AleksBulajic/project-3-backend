import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  verifyPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {

        return value === this.password;
      },
      message: 'Passwords do not match'
    }
  }
  
});

const User = mongoose.model('User', userSchema);

export default User;

