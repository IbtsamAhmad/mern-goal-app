const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const port = process.env.PORT || 5000;
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");


const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 




app.use("/api/goals", goalRoutes)
app.use("/api/users", userRoutes)
app.use(errorHandler)


app.listen(port, () => {
      console.log(colors.green(`app running on port ${port}`));
    connectDB()

});


// mongodb+srv://ibtsam123:<db_password>@cluster0.hqymmwh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


