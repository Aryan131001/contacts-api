const env = require("dotenv").config();
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnect");
const app  = express();

connectDB();

const port = process.env.PORT || 8000;
console.log(process.env.CONNECTION_STRING);

app.use(express.json());
app.use("/",require("./routes/contactRoutes"));
app.use(errorHandler);
// app.use("/show-contact",require("./routes/contactRoutes"));
// app.use("/create",require("./routes/contactRoutes"));
app.listen(port, () =>{ 
    console.log(`Server started ${port}`);
})