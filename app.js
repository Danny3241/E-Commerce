const express = require("express");
const mongoose = require("mongoose");
const app = express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
  

app.get('/', (req, res) => {
  res.send("hello, this is homepage.");
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

const url = 'mongodb://localhost:27017/E-Commerce';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.Promise = global.Promise;
mongoose.connect(url, options)
  .then(() => { console.log("Connected to MongoDB") })
  .catch((err) => console.log(err));


module.exports = app;

