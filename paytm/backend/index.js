require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(PORT, function() {
    console.log(`App is running on port ${PORT}`);
});
