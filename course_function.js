const paragraph_a = document.getElementById("bullet-1"); 
const paragraph_b = document.getElementById("bullet-2"); 
const paragraph_c = document.getElementById("bullet-3");

const active_a = document.getElementById("button_a"); 
const active_b = document.getElementById("button_b"); 
const active_c = document.getElementById("button_c");

var paragraphs = [paragraph_a, paragraph_b, paragraph_c];
var buttons = [active_a, active_b, active_c];

function clickbtn(clickedIndex){
    for(let i = 0; i < paragraphs.length; i++){
        if(i === clickedIndex){
            paragraphs[i].style.border = "3px solid #fff";
            if(clickedIndex === 0){
                window.location.href = "#point";
            }else if(clickedIndex === 1){
                window.location.href = "#bullet-2";
            }else if(clickedIndex === 2){
                window.location.href = "#bullet-3";
            }
        } else {
            paragraphs[i].style.border = "none";
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        clickbtn(i);
    });
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('click', function () {
        clickbtn(i);
    });
}

const mainpage = document.getElementById("return"); 
mainpage.addEventListener('click',function(){
    window.location.href = "QCU_SfCampus.html#Offered_c";
})
