let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

button1.addEventListener("click", function(e){
    button1.innerText = "Spinning";
    button1.className = "spinner";
});

button2.addEventListener("click", function(e){
    button2.innerText = "Spinning";
    button2.className = "spinner";
});

button3.addEventListener("click", function(e){
    button3.innerText = "Spinning";
    button3.className = "spinner";

});