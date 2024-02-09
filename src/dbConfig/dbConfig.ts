import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connect succesfully");
      connection.on("error", (err) => {
        console.log(
          "MongoDB connection error. Please make sure mibgodb is running",
          err
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
}
