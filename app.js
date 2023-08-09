console.log("Welcome to Tic Tac toe");
//let music = new Audio("music.mp3");
//let audioturn = new Audio("ting.mp3");
//let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
// //fucntion to change turn 
// const changeTurn = ()=>{
//     return turn ==="X"?"0": "X";
// }
// //function to check win
// const checkWin = ()=>{

// }

// //Game Logic

// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(element =>{
//     let boxtest = element.querySelector('.boxtext');
//     element.addEventListener('click',()=>{
//         if(boxtest.innerText ===""){
//             boxtest.innerText = turn;
//             turn = changeTurn();
//             audioturn.play();
//             checkWin();
//             document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
//         }
//     })
// })



//function to change the turn 
ChangeTurn = ()=>{
    return turn ==="X"? "0":"X";
}
checkWin = ()=>{ 
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText + "WON!";
            isGameOver=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
}
let allboxestogether = document.querySelectorAll('.box');
Array.from(allboxestogether).forEach(box =>{
    let boxtest = box.querySelector('.boxtext');
    box.addEventListener('click',()=>{
        if(boxtest.innerHTML===""){
            boxtest.innerText = turn ;
            turn = ChangeTurn();
            //audioturn();
            checkWin();
            if(!isGameOver){
            document.getElementsByClassName('info')[0].innerText = "Turn for "+turn;
        }}
    })
})
//const reset = document.querySelector('.reset');
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
            element.innerText="";
        })
        
        turn = "X";
        isGameOver = false;
        document.getElementsByClassName('info')[0].innerText = "Turn for "+turn;
        document.querySelector('img').style.width = "0px";
})





