var counter = 0;
var select =  document.getElementById('counter');

function add() {
    counter += 1;
    select.innerHTML = counter;
}

function remove() {
    if (counter > 0) {
        counter = counter - 1;
        select.innerHTML = counter;
    } 
    if (counter <= 0){
        document.getElementById("cursor").classList.add("denied");
    }
}

function changeCursor(){
    if (counter <= 0) {
        document.getElementById("cursor").classList.add("denied");
    }
    if (counter > 0) {
        document.getElementById("cursor").classList.remove("denied");
    }
}

function reload(){
    counter = 0;
    select.innerHTML = counter;
}
