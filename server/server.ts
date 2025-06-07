import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import connectDb from "./utils/connectDb";
import cookieParser from "cookie-parser";
import "dotenv/config";
//router
import authRouter from "./routes/auth";
import allRouter from "./routes/fieldRouter/allRoute";
import swaggerDocs from "./utils/swagger";

const PORT = parseInt(process.env.PORT as string) || 4000;
const app = express();
app.set("trust proxy", 1); // trust first proxy

// cors
const corsOption = {
  origin: process.env.CORS_ORIGIN,
  methods: "GET,POST, PUT, DELETE, PATCH",
  credentials: true,
}

app.use(cors(corsOption));

app.use(express.json({ limit: "30mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/users", authRouter);
app.use("/api/users", allRouter);

app.get("/",(request,response)=>{
    ///server to client
    response.json({
        message : "Server is running : " + PORT
    })
})

const server = http.createServer(app);

connectDb()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      swaggerDocs(app, PORT);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1); // Optional: Exit process on DB connection failure
  });
