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
  <button class="btn btn-block btn-info" @click.prevent='checkScore'>Endgame</button>
</div>

</template>

<script>
export default {
  name: 'Scoreboard',
  data (){
    return{
      pointsInfo : [],
      backToHome: false,
      winner: '',
      point: ''
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
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `The Winner is ${this.winner}!!`,
        text: `Score: ${this.point}`,
        showConfirmButton: false,
        timer: 1500
      })
      console.log(`winner: ${this.winner} point: ${this.point}`);
      this.$socket.emit('endgame', {})
      this.$router.push('/')
    },
    checkScore () {
      console.log(this.pointsInfo, 'ini pointsinfo')
      this.pointsInfo.forEach(data => {
        if (data.point > this.point) {
          this.winner = data.name
          this.point = data.point
        }
        this.endgame()
      })
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