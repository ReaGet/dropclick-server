require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const router = require("./src/routes");
const getSequelize = require("./src/db/index.js");
const config = require("./config/config.js");

const app = express();
const PORT = process.env.SERVER_PORT || 3001;
const sequelize = getSequelize(config.development);

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "staic")));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("work!");
})

// app.use(errorHandler);
const start = async () => {
  try {
      await sequelize.authenticate();
      await sequelize.sync();
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
      console.log(e)
  }
}


start()