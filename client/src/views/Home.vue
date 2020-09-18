<template>
    <div>
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <section id="add-product" class="row">
            <div class="col-6 d-flex align-items-center" id="home-page">
                <img src="../assets/home.svg" alt class="w-100" />
                <div class="col-12">
                    <form>
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                placeholder="Insert name"
                                v-model="name"
                            />
                        </div>
                        <button
                            @click.prevent="playerJoin"
                            type="submit"
                            class="btn btn-block btn-info"
                        >Join</button>
                    </form>
                </div>
            </div>
        </section>
        <!-- <section class="totalPlayersInfo">
      <ol>
        <li v-for="{player, index} in players" :key="index">
          {{ player }}
        </li>
      </ol>
        </section>-->
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            name: "",
            players: [],
        };
    },
    sockets: {
        initPlayers(payload) {
            this.players = payload;
        },
        fetchPlayers(payload) {
            this.players = payload;
        },
    },
    methods: {
        playerJoin() {
            if (this.name.length < 1) {
                    Swal.fire({
                    icon: "error",
                    title: "Invalid name",
                    text: "Name cannot be empty",
                    // footer: "<a href>Why do I have this issue?</a>",
                });
            } else {
                if (this.players.length < 2) {
                    this.$store.commit("setPlayerName", this.name);
                    this.$socket.emit("playerJoin", this.name);
                    this.$router.push({ name: "Lobby" });
                } else {
                    console.log("room is full");
                    Swal.fire({
                        icon: "error",
                        title: "Room is Full",
                        text: "You cannot join",
                        // footer: "<a href>Why do I have this issue?</a>",
                    });
                }
            }
        },
    },
    watch: {},
};
</script>
