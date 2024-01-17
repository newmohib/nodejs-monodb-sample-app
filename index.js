const express = require('express');
const mongoose = require('mongoose');

const todoHandler = require("./routeHandler/todoHandler")

// express app initilization

const app = express();
app.use(express.json());

// app.use(logger());

// database connection with mongoose
mongoose.connect('mongodb://localhost/todos')
    .then(() => console.log("Connectrion Successfull"))
    .catch(err => console.log(err))


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/todo', todoHandler)




// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// app listener

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.