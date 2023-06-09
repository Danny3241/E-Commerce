const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const orderRouter = require("./routes/orderRoutes");
const orderItemRouter = require("./routes/orderItemRoutes");

const app = express();

// require('dotenv/config');
// const authJwt = require('./helpers/jwt');
// app.use(authJwt());

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('../uploads'));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/order", orderRouter);
app.use("/api/orderItem", orderItemRouter);

app.get('/', (req, res) => {
  res.send("hello, this is homepage.");
})

app.listen(5656, () => {
  console.log("Server is running on port 5656");
});

const url = 'mongodb://0.0.0.0:27017/E-Commerce';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.Promise = global.Promise;
mongoose.connect(url, options)
  .then(() => { console.log("Connected to the MongoDB successfully done") })
  .catch((err) => console.log(err));


module.exports = app;

