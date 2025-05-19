const cookieParser = require("cookie-parser");
const express = require("express");
const userRouter = require("./routes/userRoutes");

require("dotenv").config();
const app = express();
// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// cookie
app.use(cookieParser());

app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
