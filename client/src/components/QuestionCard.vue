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
                    {{questions[number].question}}
                    </h5>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(questions[number].correct_answer)"
                    >{{questions[number].correct_answer}}</button>
                </div>
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(questions[number].incorrect_answers[0])"
                    >{{questions[number].incorrect_answers[0]}}</button>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(questions[number].incorrect_answers[1])"
                    >{{questions[number].incorrect_answers[1]}}</button>
                </div>
                <div class="col-5 mb-3">
                    <button
                        type="button"
                        class="btn btn-info btn-sm btn-block"
                        active="btn-primary"
                        @click.prevent="userAnswer(questions[number].incorrect_answers[2])"
                    >{{questions[number].incorrect_answers[2]}}</button>
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
            number: 4,
            isNext: false,
            point: 0,
            isDone: false
        }
    },
    props: ['questions'],
    methods: {
        setNumber(){
            // this.question= {name: 'question'}
            console.log(this.point);
            console.log(this.number);
            if(this.number === 0){
                this.isDoneCheck()
            }
            else{
                this.number -= 1
            }
            // this.isNext = true;
        },
        userAnswer(val){
            // console.log(e);
            // console.log(this.isNext, 'answer');
            if(val === this.questions[this.number].correct_answer){
                this.point += 1
            }
            // console.log(this.point);
            this.isNext = true

        },
        isDoneCheck(){
            console.log('test')
            let payload = {
                name: this.$store.state.name,
                point: this.point
            }
            this.$socket.emit("done", payload)
            this.$router.push({name: 'Scoreboard'})
            
        },
    },
    computed: {

    },
    watch: {
        isNext: function (){
            console.log('masuk ke isNext');
            if (this.isNext){
                this.setNumber()
                this.isNext = false
            }
            console.log(this.isNext, 'isNext');

        }
    },
    created (){
        // this.setQuestion()
    }
}
</script>

<style>
</style>
