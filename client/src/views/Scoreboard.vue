<template>
<div>
  <!-- {{pointsInfo}} -->
  <div class="card" v-for="(pointInfo, index) in pointsInfo" :key='index' style="width: 18rem;background-color: red;" >
    <div class="card-header">
      {{pointInfo.name}}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{pointInfo.point}}</li>
    </ul>
  </div>
  <button class="btn btn-block btn-info" @click.prevent='endgame'>Endgame</button>
</div>

</template>

<script>
export default {
  name: 'Scoreboard',
  data (){
    return{
      pointsInfo : [],
      backToHome: false
    }
  },
  sockets: {
    fetchPointsInfo(payload){
      this.pointsInfo = payload
    },
    
    backToHome(payload){
      this.backToHome = payload
    }
  },
  methods: {
    endgame (){
      console.log("asdf");
      this.$socket.emit('endgame', {})
      this.$router.push('/')
    }
  },
  watch: {
    backToHome: function(){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>