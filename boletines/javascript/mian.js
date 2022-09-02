/*console.log("Desde un archivo externo javascript hola");

let container = document.querySelector(".container");*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener("click",function(){
        console.log("click");
    });
});*/
/*
let cerrar = document.querySelectorAll(".close");

cerrar.forEach(function(x){
    x.addEventListener("click",function(ev){
        ev.preventDefault();
        return false;
    });

});*/

let links = document.querySelectorAll(".close");
links.forEach(function(link){
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        content.classList.remove("animate__animated");
        content.classList.remove("animate__fadeInUp");
        content.classList.add("animate__animated");
        content.classList.add("animate__bounce");

        setTimeout(function(){
            location.href = "/boletines/index.html";
        }, 1000);
    });

    return false;
});