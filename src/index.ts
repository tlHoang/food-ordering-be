import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to MongoDB"))

const app = express();
app.use(express.json());
app.use(cors());

//api/my/user
app.use("/api/my/user", myUserRoute);

// app.get("/api/my/user", async (req: Request, res: Response) => {
//   res.json({ message: "Hello" });
// });

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});
app.listen(7000, () => {
  console.log("Server is running on port 7000");
});