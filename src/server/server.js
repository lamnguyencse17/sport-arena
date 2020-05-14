import express from "express";
import cors from "cors";
import morgan from "morgan";
import {} from "dotenv/config";

// import module from "./config/initDb";

import initDb from "./config/initDb";

initDb();

const SERVER_PORT = 3000;
const app = express();
app.use(cors());
app.use(morgan("tiny"));

app.use("/", (req, res) => {
  res.send("GOOD");
});

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`)
);
