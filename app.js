
const fs = require('fs');
const path = require('path');
const express = require('express');
const winston = require('winston');
const app = express();
const logger = require('./middlewares/loggerMiddleware');

//logger configuration 
// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.combine(
//     winston.format.timestamp(),
//     winston.format.printf(
//       (info) => `${info.timestamp} ${info.level}: ${info.message}`
//     )
//   ),
//   // Log to the console and a file
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: "logs/app.log" }),
//   ],
// });

// custom middleware create
//in express.js middleware functions three parameters are passed req,res & next

// application level middleware
app.use(logger);


//array of strings to test res.params 
const randomTexts = [
  "Hello there!",
  "Welcome to our website.",
  "Have a great day!",
  "This is a random message.",
  "Thanks for visiting!"
];

const user = {
    name:'joshua',
    age:2,
    account_type:'savings'
}
const balance = {
    naira:90000,
    dollar:2000
}
// Function to get query
app.get('/', (req, res)=> {
    if (req.query){
            res.send({
            user:(req.query.user),
            balance:(req.query.balance)

        })
    }   
});

//function to generate texts 
app.get('/texts/:id', (req, res)=> {
    if (req.params.id) {
    let id = req.params.id
    res.send(randomTexts[id])  
    // logger.log('warn', 'requests received')
// Log messages at different log levels
//   logger.log("error", "This is an error message");
//   logger.log("warn", "This is a warning message");
//   logger.log("info", "This is an info message");
//   logger.log("verbose", "This is a verbose message");
//   logger.log("debug", "This is a debug message");
//   logger.log("silly", "This is a silly message");
    }
});

let server = app.listen(3000, function() {
    console.log('Server is listening on port 3000')
});