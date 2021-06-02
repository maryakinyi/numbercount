var placeholder=document.getElementById("placeholder");
var increase=document.getElementById("increase");
var decrease=document.getElementById("decrease");

var number=0;
function colorChange(number){
    var color="";
    if (number<0){
        color="green";
    }else if(number>0){
        color="red";
    }else{
        color="white"
    }
    return color;
    }
    increase.addEventListener("click",function(){
        number++;
        placeholder.innerHTML=number;
        placeholder.style.color=colorChange(number);
    })
    decrease.addEventListener("click",function(){
        number--;
        placeholder.innerHTML=number;
        placeholder.style.color=colorChange(number)
    })
