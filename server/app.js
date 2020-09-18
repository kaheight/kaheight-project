const express = require('express')
const app = express()
const port = 3000
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const axios = require('axios');

// let questionList;
let players = []
let pointsInfo = []


app.get('/', (req, res) => {
  res.send('Hello World!')
})

axios({
  method: 'GET',
  url: 'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple'
})
  .then(({ data }) => {
    var questionList = data.results

    io.on('connection', (socket) => {
      console.log('a user connected');
    
      socket.on('playerJoin', payload => {
        players.push(payload)
        console.log(players, '<< ini player')
        socket.emit('fetchPlayers', players)
        socket.broadcast.emit('fetchPlayers', players)
      })
    
      socket.on('startPlay', payload => {
        socket.broadcast.emit("checkPlay", payload)
        socket.emit('fetchQuestionsList', questionList)
        socket.broadcast.emit('fetchQuestionsList', questionList)
      })
    
      socket.on('done', payload => {
        pointsInfo.push(payload)
        console.log(pointsInfo);
        socket.emit('fetchPointsInfo', pointsInfo)
        socket.broadcast.emit('fetchPointsInfo', pointsInfo)
      })

      socket.on('endgame', payload => {
        players = []
        pointsInfo = []
        socket.emit('backToHome', true)
        socket.broadcast.emit('backToHome', true)
      })
    });
    // console.log(questionList);
  })
  .catch(({ err }) => {
    console.log(err);
  })


http.listen(3000, () => {
  console.log('listening on *:3000');
});