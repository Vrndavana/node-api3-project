const express = require('express'); // import
const userRouter = require("./users/userRouter.js"); // local import
const server = express(); // connect express and server

server.use(logger);
server.use(express.json());
server.use("/api/users", userRouter);
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) { // respone not used (we aren't sending info to client user)
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`); // Method & original built in 2 req
  next();
}
module.exports = server;
