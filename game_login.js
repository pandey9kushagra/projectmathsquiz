function adduser(){

   player1 = document.getElementById("p1name").value
   player2 = document.getElementById("p2name").value

   localStorage.setItem("player1name", player1)
   localStorage.setItem("player2name", player2)

   window.location = "game_page.html"
}