import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/chat.routes.js"
import msgRouter from "./routes/message.routes.js";
import userRoutes from "./routes/userroutes.js";
import connectMongo from "./database/connectMongo.js"

const app = express();
const PORT =process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/chat",msgRouter);
app.use("/api/messages", msgRouter);
app.use("/api/users", userRoutes);

app.listen(PORT,() => {
    connectMongo();
    console.log(`SERVER running on port ${PORT}`);
});