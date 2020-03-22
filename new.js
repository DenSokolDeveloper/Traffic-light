let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let redTime = 10;
let greenTime = 10;
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
    yellow.classList.add('active');
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
        if (count <= 5){
            if (count%2 !== 0){
                red.classList.remove('active');
            }else{
                red.classList.add('active');
                if (count<=1&&count>=0){
                    activeYellow();
                    p.remove();
                }
            }
        }
        if (count === -1){
            clearInterval(redTimer);
            red.classList.remove('active');
            red.removeChild(p);
                     activeGreen();
            yellow.classList.remove('active');
                     let greenTimer = setInterval(()=>{
                         activeGreen();
                         if (count <= 5) {
                             if (count % 2 !== 0) {
                                 green.classList.remove('active');
                             } else {
                                 green.classList.add('active');
                                 if (count <= 1 && count >= 0) {
                                     activeYellow();
                                     p.remove();
                                 }
                             }
                         }
                         if (count === -1){
                             clearInterval(greenTimer);
                             green.classList.remove('active');
                             green.removeChild(p);
                                clicker();
                                redTime=10;
                                greenTime=10;
                             activeRed();
                             green.classList.remove('active');
                             yellow.classList.remove('active');
                         }
                     }, 1000);
                 }
    },1000);
}
clicker();










