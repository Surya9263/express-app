const mongoose = require("mongose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://surya:surya123@cluster0.egl1mnc.mongodb.net/MOCK10"
  );
};

module.exports = connect;
