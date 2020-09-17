<template>
    <div class="card mt-3 mb-3 shadow-sm" style="width: 50rem;">
        <div class="card-body">
            <div class="row justify-content-center">
                <img src="../assets/question.png" style="width: 8rem; height:7rem;" alt="question" />
            </div>
            <div class="row justify-content-center mb-5">
                <div class="col bg-white rounded-lg">
                    <h5
                        class="card-title text-dark pt-3 pb-3 pl-3 pr-3 text-wrap"
                    >
                    {{question.question}}
                    </h5>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(question.correct_answer)"
                    >{{question.correct_answer}}</button>
                </div>
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(question.incorrect_answers[0])"
                    >{{question.incorrect_answers[0]}}</button>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(question.incorrect_answers[1])"
                    >{{question.incorrect_answers[1]}}</button>
                </div>
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(question.incorrect_answers[2])"
                    >{{question.incorrect_answers[2]}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QuestionCard',
    data (){
        return{
            question: [],
            number:4,
            isNext: false,
            point: 0
        }
    },
    props: ['questions'],
    methods: {
        setQuestion(){
            console.log(this.$store.state.randomizedQuestion);
            this.question= this.$store.state.randomizedQuestion[this.number]
            console.log(this.question);
            // if(this.number === 0){
            
            // }
            this.number -= 1
            this.isNext = true;
        },
        userAnswer(val){
            // console.log(e);
            if(val === this.question.correct_answer){
                this.point += 1
            }
            console.log(this.point);
            this.isNext = true
        }
    },
    watch: {
        isNext: function (){
            console.log('masuk ke watch');
            if (this.isNext){
                this.setQuestion()
                this.isNext = false
            }
        }
    },
    mounted (){
        this.setQuestion()
    }
}
</script>

<style>
</style>
