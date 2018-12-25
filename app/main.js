

const buttonElement = document.getElementById('calc__nota__finala');

window.onload = function() {
    document.getElementById("1n").focus();
  };


function calculeazaMedia() {
    let frst_field = document.getElementById("1n").value;
    let scnd_field = document.getElementById("2n").value;
    let result = ((frst_field*0.6)+(scnd_field*0.4));
    let answer = "Nota finala este: ";
    document.getElementById("rezultat").innerHTML = answer + result;
    //return (a*0.6)+(b*0.4);
}

function calculeazaMediaCurenta() {
    let frst_field = document.getElementById("t1n").value;
    let scnd_field = document.getElementById("si2n").value;
    let thrd_field = document.getElementById("pr2n").value;
    
    let answer = "Media curenta este: ";
    let result = 0; 

    if (thrd_field == "" || thrd_field == 0){
        result = ((frst_field * 1)+(scnd_field * 1))/2;
    } else {
        result = ((frst_field * 1)+(scnd_field * 1)+(thrd_field * 1))/3;
    }
    document.getElementById("rezultat_medie_curenta").innerHTML = answer + result;
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

