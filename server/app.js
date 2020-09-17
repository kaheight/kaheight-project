const express = require('express')
const app = express()
const port = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const axios = require('axios');

// let questionList;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

io.on('connection', (socket) => {
  console.log('a user connected');
});

axios({
  method: 'GET',
  url: 'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple'
})
  .then(({ data }) => {
    var questionList = data.results
    console.log(questionList);
  })
  .catch(({ err }) => {
    console.log(err);
  })


http.listen(3000, () => {
  console.log('listening on *:3000');
});