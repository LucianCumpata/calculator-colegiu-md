

const buttonElement = document.getElementById('calc__nota__finala');

window.onload = function() {
    document.getElementById("1n").focus();
  };


function calculeazaMedia() {
    let frst_field = document.getElementById("1n").value;
    let scnd_field = document.getElementById("2n").value;
    let result = ((frst_field*0.6)+(scnd_field*0.4));
    document.getElementById("rezultat").innerHTML = result;
    //return (a*0.6)+(b*0.4);
}

function calculeazaMediaCurenta() {
    let frst_field = document.getElementById("c1n").value;
    let scnd_field = document.getElementById("c2n").value;
    let result = ((frst_field * 1)+(scnd_field * 1))/2;
    document.getElementById("rezultat_medie_curenta").innerHTML = result;
    //return ;
}


document.addEventListener('keydown', (event) => {
    if(event.key=='Enter'){
        calculeazaMedia();
    }
});
/*
buttonElement.addEventListener('click', function (event) {
    alert(calculeazaMedia(frst_field,scnd_field));
  });
  */

