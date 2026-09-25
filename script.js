let buttons = document.querySelectorAll(".firstROW div, .secondRow div, .thirdRow div ,.fourthRow div,.fifthRow div");
let show = document.getElementById("show");
let clear = document.getElementById("AC");
let remove= document.getElementById("del");
let equal= document.getElementById("equal");

buttons.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.id !== "equal" && button.id!=="percentage"){
        show.innerText += button.innerText;
        }
        console.log("its working");
    });
});

clear.addEventListener("click",function(){
    show.innerText = " ";
});

remove.addEventListener("click",function(){
    show.innerText = show.innerText.slice(0,-1);
});
equal.addEventListener("click",function(){
    let expression = show.innerText.replace("x","*");
    show.innerText = eval(expression);
});


let percentage = document.getElementById("percentage");
let division = document.getElementById("div");

percentage.addEventListener("click", function() {
    show.innerText = Number(show.innerText) / 100;
});
 
division.addEventListener("click",function(){
    show.innerText +="/";
});

equal.addEventListener("click", function() {
    try {
        let expression = show.innerText.replace("X", "*");

        
        if (/[+\-*/][+\-*/]/.test(expression)) {
            show.innerText = "Error";
            return;
        }

        show.innerText = eval(expression);

    } catch (error) {
        show.innerText = "Error";
    }
});