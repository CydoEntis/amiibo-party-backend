// TODO: Set up database connection
const  mongoose = require("mongoose");

const connectToDB = url => {
  return mongoose.connect(url);
}

export default connectToDB;