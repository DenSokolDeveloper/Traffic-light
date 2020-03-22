let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let redTime = 10;
let greenTime = 10;
let yellowTime= 3;
let count = document.querySelector('.count');
let p = document.createElement('p');
p.classList.add('count');

function activeRed() {
    count= redTime;
    red.classList.add('active');
    red.appendChild(p);
    p.innerHTML = count;
    count--;
    redTime=count;
}
function activeYellow() {
    count = yellowTime;
    yellow.classList.add('active');

count--;
yellowTime=count;
}
function activeGreen() {
    count= greenTime;
    green.classList.add('active');
    green.appendChild(p);
    p.innerHTML = count;
    count--;
    greenTime=count;
}
function clicker() {
    activeRed();
    let redTimer = setInterval(()=>{
        activeRed();
        if (count === 5){
            red.classList.remove('active');
        }
        if (count === 4){
            red.classList.add('active');
        }
        if (count === 3){
            red.classList.remove('active');
        }
        if (count === 2){
            red.classList.add('active');
        }
        if (count === 1){
            red.classList.remove('active');
        }
        if (count === -1){
            clearInterval(redTimer);
            red.classList.remove('active');
            red.removeChild(p);
            activeYellow();
            let yellowTimer = setInterval(()=>{
                activeYellow();
                 if (count === -1){
                     clearInterval(yellowTimer);
                     yellow.classList.remove('active');

                     activeGreen();
                     let greenTimer = setInterval(()=>{
                         activeGreen();
                         if (count === 5){
                             green.classList.remove('active');
                         }
                         if (count === 4){
                             green.classList.add('active');
                         }
                         if (count === 3){
                             green.classList.remove('active');
                         }
                         if (count === 2){
                             green.classList.add('active');
                         }
                         if (count === 1){
                             green.classList.remove('active');
                         }
                         if (count === -1){
                             clearInterval(greenTimer);
                             green.classList.remove('active');
                             green.removeChild(p);
                                clicker();
                                redTime=10;
                                greenTime=10;
                                yellowTime=2;
                             activeRed();
                         }
                     },1000);
                 }
            },1000);
        }
    },1000);
}
clicker();










