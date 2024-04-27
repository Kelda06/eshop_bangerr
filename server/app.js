const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const app = express();
const port = 7070;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const uri = 'mongodb+srv://adamkeller:LamboSoon69@cluster0.sagfcui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const userRouter = require('./routes/user');
const itemRouter = require('./routes/item');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');

app.use('/user', userRouter);
app.use('/item', itemRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
