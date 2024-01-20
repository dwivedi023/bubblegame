// var time = 15;
// var hitnumber = 0;
// var score = 0;

// function createbubble(){
//     var bubblee = "";
//     var rn;
//     for(var i = 1;i<=112;i++){
//         rn = Math.floor(Math.random()*10);
//         bubblee += `<div class="bubble">${rn}</div>`
//     }
//     document.querySelector(".pbtm").innerHTML = bubblee;
// }
// function runtimer(){
// var timer= setInterval(function(){
//     if(time>0){
//         time--;
//         document.querySelector("#timer").textContent = time;}
//         else{
//             clearInterval(timer);
//             document.querySelector(".pbtm").innerHTML = ""; 
//             document.querySelector(".pbtm").innerHTML = `Game Over <br> Your Score : ${score}`; 
//         }
//     }, 1000);
// }
// function hit(){
//     hitnumber = Math.floor(Math.random()*10);
//     document.querySelector("#hitter").innerHTML =hitnumber;
// }

// function increaseScore(){
//     score += 10;
//     document.querySelector("#score").textContent =  score;
//     // scorer+=10;
// }

// document.querySelector(".pbtm").addEventListener("click",function(dets){
//     // console.log(dets.target)
//     var clikednumber = Number(dets.target.textContent);
//     if(clikednumber === hitnumber){
//         increaseScore();
//         createbubble();
//         hit();
//     }
    
// })

// runtimer();
// hit();
// createbubble();

function startgame(){
    var time = 20;
var hitnumber = 0;
var score = 0;

function createbubble(){
    var bubblee = "";
    var rn;
    for(var i = 1;i<=112;i++){
        rn = Math.floor(Math.random()*10);
        bubblee += `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".pbtm").innerHTML = bubblee;
}
function runtimer(){
var timer= setInterval(function(){
    if(time>0){
        time--;
        document.querySelector("#timer").textContent = time;}
        else{
            clearInterval(timer);
            document.querySelector(".pbtm").innerHTML = ""; 
            document.querySelector(".pbtm").innerHTML = `Game Over <br> Your Score : ${score}`; 
            document.querySelector("#score").innerHTML = 0; 
            document.querySelector("#hitter").innerHTML = 0; 
            // score = 0;
        }
    }, 1000);
}
function hit(){
    hitnumber = Math.floor(Math.random()*10);
    document.querySelector("#hitter").innerHTML =hitnumber;
}

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent =  score;
    // scorer+=10;
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
    // console.log(dets.target)
    var clikednumber = Number(dets.target.textContent);
    if(clikednumber === hitnumber){
        increaseScore();
        createbubble();
        hit();
    // score = 0;
    }
    
})

runtimer();
hit();
createbubble();


}
document.querySelector("button").addEventListener("click",function(){
    startgame();
})