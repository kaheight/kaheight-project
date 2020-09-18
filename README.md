# kaheight-project
Group project for Hacktiv8

1. Input name di halaman /home, kalo sudah play tidak bisa join redirect ke /waiting
    1. emit ke server data user
    2. di server simpan ke variable/db
    3. server emit ke client pakai (io.emit)
    4. kalo sudah 2 muncul tombol play
    5. tombol play emit
    6. reroute ke play
2. page /play
    1. hit api dapet data pertanyaan
    2. server emit ke client data pertanyaan
    3. client menampilkan data pertanyaan
    4. swal() buat menampilkan score
    5. setelah selesai tampilkan tombol play again
    6. atau ke /home

# How to play Kaheight

1. Input your name, then click join
2. Wait for your opponent in the lobby
3. Answer the questions in the best of your ability
4. Wait for your opponent to finish their game
5. Compare your score