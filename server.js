const env = require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnect");
const app  = express();

connectDB();

const port = process.env.PORT || 8000;
console.log(process.env.CONNECTION_STRING);

app.use(express.json());
app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/UserRoutes.js"));
app.use(errorHandler);
app.listen(port, () =>{ 
    console.log(`Server started ${port}`);
})