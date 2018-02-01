const mongoose = require('mongoose');
const systemUserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role_id: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: '10A'
  },
  create_time: {
    type: Number,
    default: Date.now()
  }
});

const systemUserModel = mongoose.model('system_user', systemUserSchema)

module.exports = systemUserModel;