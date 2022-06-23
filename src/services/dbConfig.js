const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("DB connected successfuly");
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

module.exports = dbConnect;
