document.getElementById("Grow").addEventListener("click", function(){
    document.getElementById("box").style.height = "200px";
    document.getElementById("box").style.width = "200px"

});

document.getElementById("Blue").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue"

});

document.getElementById("Fade").addEventListener("click", function(){
    document.getElementById("box").style.opacity = ".5"

});

document.getElementById("Reset").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1"

})
