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

        <button class="btn btn-block btn-info" v-if="players.length > 2" @click.prevent='startPlay'>Play</button>

    </div>
</template>

<script>
export default {
  name: 'Lobby',
  data () {
    return {
      players: [],
      play: false
    }
  },
  methods: {
    startPlay () {
      this.$socket.emit('startPlay', true)
      this.play = true
    }
  },
  sockets: {
    fetchPlayers (payload) {
      this.players = payload
      console.log(this.players)
    },
    checkPlay (payload) {
      this.play = payload
    }
  },
  watch: {
    play: function () {
      this.$router.push({ name: 'Play' })
    }
  }
}
</script>

<style>
</style>
