const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("welcome to my first hello world app"));

app.listen(3333, () => console.log("Server is running"));
