<template>
    <div class="container">
        {{questionList[2]}}
        <div class="row justify-content-center">
            <div class="col-8">
                <QuestionCard :questions='randomQuestion'></QuestionCard>
            </div>
        </div>
         <audio controls autoplay style="display: none;">  
        <source src="../assets/background-music-quiz.mp3" type="audio/mpeg">  
    </audio>
    </div>
</template>

<script>
import QuestionCard from '../components/QuestionCard.vue'

export default {
  name: 'Play',
  data () {
    return {
      questionList: [],
      randomQuestion: []
    }
  },
  components: {
    QuestionCard
  },
  sockets: {
    async fetchQuestionsList  (payload) {
      try{
			  await this.$store.commit('setQuestionList', payload)
    	  this.randomizeQuestion()
      }catch(err){
        console.log(err);
      }
    }
  },
  methods: {
    randomizeQuestion () {
			// console.log(this.randomQuestion);
      for (let i = 0; i <= 4; i++) {
        const number = Math.floor(Math.random() * 10)
        // console.log(this.questionList[0])
        this.randomQuestion.push(this.$store.state.questionList[number])
      }
			// console.log(this.randomQuestion, 'dari randomize')
			this.$store.commit('setRandomizedQuestion', this.randomQuestion)
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>
