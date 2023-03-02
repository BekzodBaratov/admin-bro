require("dotenv").config();
require("colors");
const app = require("./index");
const connectDB = require("./db");

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`.bgGreen.bold));
