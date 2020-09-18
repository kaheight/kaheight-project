<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section id="add-product" class="row" >
      <div class="col-6 d-flex align-items-center" id="home-page">
            <img src="../assets/home.svg" alt="" class="w-100">
      <div class="col-12">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Insert name" v-model="name">
                </div>
                <button @click.prevent='playerJoin' type="submit" class="btn btn-block btn-info">Join</button>
            </form>
        </div>
      </div>
    </section>
    <section class="totalPlayersInfo">
      <ol>
        <li v-for="{player, index} in players" :key="index">
          {{ player }}
        </li>
      </ol>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      players: []
    }
  },
  methods: {
    fetchPlayersInfo () {

    },
    playerJoin () {
      this.$store.commit('setPlayerName', this.name)
      this.$socket.emit('playerJoin', this.name)
      this.$router.push({ name: 'Lobby' })
    }
  },
  watch: {

  }
}
</script>
