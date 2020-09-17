<template>
    <div class="container">
        {{questionList[2]}}
        <div class="row justify-content-center">
            <div class="col-8">
                <QuestionCard :questions='randomQuestion'></QuestionCard>
            </div>
        </div>
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
    fetchQuestionsList (payload) {
			this.$store.commit('setQuestionList', payload)
    	this.randomizeQuestion()
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
