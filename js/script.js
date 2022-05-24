// button click handler
var movesLeft=document.getElementById("move-count");
var player=document.getElementById("next-player");

console.log(player);
var moves=9;

var btn=document.getElementsByClassName("box enabled");
function buttonClicked(events){
   console.log(events.target.id);
 
   if(events.target.id=="replay" || events.target.id=="reset"){
      reset();
    }
   else{
         if(moves>0){
            if(moves%2!=0){
                if(!(events.target.innerText=="X" ||events.target.innerText=="O"))
                  {  
                     events.target.innerText="X";
                     moves--; 
                     movesLeft.innerText="Moves Left: "+moves;   
                     playerText();
                 }
            }
            else{  
                if(!(events.target.innerText=="X" ||events.target.innerText=="O"))
                 {  events.target.innerText="O";
                    moves--;
                    movesLeft.innerText="Moves Left: "+moves;
                    playerText();
                 }
            }
        } 
        else{
            if(moves==0){
                alert("GAME OVER");
                reset();
            } 
        }    
   }
   if (( btn[0].innerText== 'X' &&  btn[1].innerText == 'X' && btn[2].innerText == 'X') ||( btn[0].innerText== 'X' &&  btn[3].innerText == 'X' && btn[6].innerText == 'X') ||( btn[0].innerText== 'X' &&  btn[4].innerText == 'X' && btn[8].innerText == 'X') || ( btn[2].innerText== 'X' &&  btn[4].innerText == 'X' && btn[6].innerText == 'X') || ( btn[3].innerText== 'X' &&  btn[4].innerText == 'X' && btn[5].innerText == 'X') || ( btn[6].innerText== 'X' &&  btn[7].innerText == 'X' && btn[8].innerText == 'X') || ( btn[2].innerText== 'X' &&  btn[5].innerText == 'X' && btn[8].innerText == 'X')){
    alert("PLAYER 1 WON THE MATCH");
    reset();
   }
   if (( btn[0].innerText== 'O' &&  btn[1].innerText == 'O' && btn[2].innerText == 'O') ||( btn[0].innerText== 'O' &&  btn[3].innerText == 'O' && btn[6].innerText == 'O') ||( btn[0].innerText== 'O' &&  btn[4].innerText == 'O' && btn[8].innerText == 'O') || ( btn[2].innerText== 'O' &&  btn[4].innerText == 'O' && btn[6].innerText == 'O') || ( btn[3].innerText== 'O' &&  btn[4].innerText == 'O' && btn[5].innerText == 'O') || ( btn[6].innerText== 'O' &&  btn[7].innerText == 'O' && btn[8].innerText == 'O') || ( btn[2].innerText== 'O' &&  btn[5].innerText == 'O' && btn[8].innerText == 'O')){
    alert("PLAYER 2 WON THE MATCH");
    reset();
   }
 
} 
function reset(){
    for(let i=0;i<btn.length;i++){
        btn[i].innerText=" ";
    }
    moves=9;
    movesLeft.innerText="Moves Left: "+moves;
    player.innerText="Turn Played By:-------";
}

function playerText(){
    if((player.innerText=="Turn Played By:-------")||(player.innerText=="Turn Played By: 2"))
    {
        player.innerText="Turn Played By: 1";
    }
    else{
        player.innerText="Turn Played By: 2";  
    }
    
}


//apply event to generate new game state


// game state renderer renders the generated game state



// renders text on button clicked with X or O



// disable the button clicked


// update panel values such as Turn Played By and Moves Left



// reset panel values to default values



// implement logic to get the winner



// announce winner



// REPLAY-MODE :: replay-game-button-clicked->fetches events recorded->apply event->generates new game state->render game state



// reset game to start a new



// bind events to clickable buttons
