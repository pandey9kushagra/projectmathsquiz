player1name = localStorage.getItem("player1name")
player2name = localStorage.getItem("player2name")

player1score = 0
player2score = 0

document.getElementById("user1").innerHTML = player1name + " : "
document.getElementById("user2").innerHTML = player2name + " : "

document.getElementById("score1").innerHTML = player1score
document.getElementById("score2").innerHTML = player2score

document.getElementById("questionturn").innerHTML="Question Turn - " + player1name
document.getElementById("answerturn").innerHTML="Answer Turn - " + player2name

function send(){

    num1 = document.getElementById("numb1").value
    num2 = document.getElementById("numb2").value
    mainans = parseInt(num1) * parseInt(num2)

    question_word ="<h4>" + num1 +" X " + num2 +"</h4>"
    input_box = "<br>Answer : <input type='text' id='inputcheckbox'>"
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>"
    row = question_word + input_box + check_button
    document.getElementById("output").innerHTML = row
    document.getElementById("numb1").value = ""
    document.getElementById("numb2").value = ""
    document.getElementById("wrong").innerHTML =""
}

questionturn = "player1"
answerturn = "player2"

function check(){

    getans = document.getElementById("inputcheckbox").value
    ans = parseInt(getans)

    if(ans == mainans){

        if(answerturn =="player1"){

            player1score ++
            document.getElementById("score1").innerHTML = player1score
        }
        else{

            player2score ++ 
            document.getElementById("score2").innerHTML = player2score
        }
    }
    else{

        document.getElementById("wrong").innerHTML = "Your answer is wrong!"
    }

    if(questionturn == "player1"){

        questionturn = "player2"
        document.getElementById("questionturn").innerHTML = "Question Turn - " + player2name
    }
    else{

        questionturn = "player1"
        document.getElementById("questionturn").innerHTML = "Question Turn - " + player1name 
    }

    if(answerturn == "player1"){

        answerturn = "player2"
        document.getElementById("answerturn").innerHTML = "Answer Turn - " + player2name
    }
    else{

        answerturn = "player1"
        document.getElementById("answerturn").innerHTML = "Answer Turn - " + player1name 
    }

    document.getElementById("output").innerHTML =""

}









