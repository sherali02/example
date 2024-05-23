let dark=document.getElementById('moon');
let bd=document.querySelector('body');
dark.addEventListener("click",(event) => {
    event.preventDefault();
    document.querySelector('nav').style.backgroundColor="#000327";
    document.querySelector('.Overview').style.backgroundColor="#3d0000";
    document.querySelector('.Projects').style.backgroundColor="#004000";
    document.querySelector('.Achievements').style.backgroundColor="#310834";
    document.querySelector('.Contact-Details').style.backgroundColor="#000354";
    document.querySelector('.survey-form ').style.backgroundColor="#2A2A2A";
    document.querySelector('.Contact-Details').style.color="white";
    document.querySelector('.Education-Details').style.backgroundColor="#333B00";

    document.querySelectorAll('nav ul li a').forEach(function(anchor) {
        anchor.style.color = "#B0B4DF";
    });
    bd.style.backgroundImage="linear-gradient(to bottom, #031738,#630000)"; 
    document.querySelectorAll('header h1').forEach(function(anchor) {
        anchor.style.color = "#FFFFFF";
    });
    document.querySelectorAll('a').forEach(function(anchor) {
        anchor.style.color = "#C1D1FD";
    });
    document.querySelectorAll('p').forEach(function(anchor) {
        anchor.style.color = "#FFFFFF";
    });
    document.querySelectorAll('form').forEach(function(anchor) {
        anchor.style.color = "#FFFFFF";
    });
    document.querySelectorAll('h3').forEach(function(anchor) {
        anchor.style.color = "#FFFFFF";
    });
    document.querySelectorAll('h2,h4,ol,td,ul').forEach(function(anchor) {
        anchor.style.color = "#FFFFFF";
    });
    document.querySelector('footer').style.backgroundColor="#250000";
})

let cap=document.querySelector('#cap');
let x=(Math.floor(Math.random()*50).toString());
let y=(Math.floor(Math.random()*50))
cap.innerText=x+"+"+y+"=";

let nam=document.querySelector('#name');
nam.addEventListener('input',()=>{
    setTimeout(()=>{
        if(nam.value[0]=='1'||nam.value[0]=='2'||nam.value[0]=='3'||nam.value[0]=='4'||nam.value[0]=='5'||nam.value[0]=='6'||nam.value[0]=='7'||nam.value[0]=='8'||nam.value[0]=='9'){
            alert("Name should not start with a number.");
            nam.value=""
        }
    },500)
})

let retry=document.getElementById('retry');
retry.addEventListener("click",(event) => {
    x=(Math.floor(Math.random()*50).toString());
        y=(Math.floor(Math.random()*50));
        cap.innerText=x+"+"+y+"=";
})

let captch=document.querySelector('#captch');
document.getElementById("survey-form").addEventListener('submit',(eve)=>{
    if(captch.value==parseInt(x)+y){
        alert("Feedback Successfully Submitted..! Thank you.");
        return true;
    }
    else{
        alert("Captcha failed :(\nPlease enter valid captcha.");
        x=(Math.floor(Math.random()*50).toString());
        y=(Math.floor(Math.random()*50))
        cap.innerText=x+"+"+y+"=";
        eve.preventDefault(); 
    }
})


