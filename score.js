

function showScores(){
    var highscoresTBody =  document.getElementById("highscores");
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.forEach(function(score){

        var nameTd = document.createElement("td");
        nameTd.textContent = score.initials;

        
        var scoreTd = document.createElement("td");
        scoreTd.textContent = score.score;

        var tr = document.createElement("tr");
        tr.appendChild(nameTd);
        tr.appendChild(scoreTd);

        highscoresTBody.appendChild(tr);
    });
}

showScores();

var clearHighScores = document.getElementById("clear");
clearHighScores.onclick = clearStorage;

function clearStorage(){
    localStorage.removeItem("highscores");
    location.reload();
}

 
