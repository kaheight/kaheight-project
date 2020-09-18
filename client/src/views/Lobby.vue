<template>
    <div>
        <div class="card" style="width: 18rem;">
            <div class="card-header">List players</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item" v-for="(player, index) in players" :key="index">
                  {{ player }}
                </li>
            </ul>
        </div>

        <button class="btn btn-block btn-info" v-if="players.length >= 2" @click.prevent='startPlay'>Play</button>
        <button class="btn btn-block btn-info" @click.prevent='leave'>endgame</button>

    </div>
</template>

<script>

export default {
  name: 'Lobby',
  data () {
    return {
      players: [],
      play: false,
      backToHome: false
    }
  },
  methods: {
    startPlay () {
      this.$socket.emit('startPlay', true)
      this.play = true
      new Audio('../assets/background-music-quiz.mp3').play
    },
    leave(){
      console.log("jalan");
      this.$socket.emit('endgame', {})
    }
  },
  sockets: {
    fetchPlayers (payload) {
      this.players = payload
      console.log(this.players)
    },
    checkPlay (payload) {
      this.play = payload
    },
    backToHome(payload){
      this.backToHome = payload
    }
  },
  watch: {
    play: function () {
      this.$router.push({ name: 'Play' })
    },
    backToHome: function(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
