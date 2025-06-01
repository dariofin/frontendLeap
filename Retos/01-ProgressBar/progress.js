// capturo todoso los botones de los pasos
let selectbtn = document.getElementsByClassName("cardbox__steps__step");
console.log(selectbtn);

// capturo la barra de progreso
let progressbar = document.getElementById("progressbar");
// console.log(progressbar.attributes.max.value)
console.log(progressbar.value)

// agrego escucha de click a cada boton con un bucle
for (let i = 0; i < selectbtn.length; i++) {
    selectbtn[i].addEventListener("click", Done);
}

function Done() {

    // limpio la clase done de todos los numeros
    let spans = document.getElementsByClassName("cardbox__steps__number");
    for(let i=0; i<spans.length; i++){
        spans[i].classList.remove("done");
}

    // obtengo el número clickeado le agrego .textcontent al final para obtener el valor actual
    let stepSpan = this.querySelector(".cardbox__steps__number");
    // console.log(stepSpan.textContent)
      let stepNumber = stepSpan.textContent

    // obtngo las clases del elemento stepSpan
    let clasesSpan = stepSpan.classList;
    console.log("clasesSpan ⚠️")
    console.log(clasesSpan);
  


    //console.log("hizo click en" + stepNumber);

    // corrijo la diferencia de la barra de progreso
    switch (stepNumber) {
        case "1":
            stepNumber = 0.5;
           
            addDoneStyle(1);

            break;
        case "2":
            stepNumber = 1.6;        addDoneStyle(2);

            break;
        case "3":
            stepNumber = 2.7;        addDoneStyle(3);

            break;
        case "4":
            stepNumber = 4.1;        addDoneStyle(4);

            break;

             case "5":
            stepNumber = 5;        addDoneStyle(5);

            break;
    }


    function addDoneStyle(num) {
            for(let i=1; i<num; i++){
        spans[i].classList.add("done");
}


    }
    progressbar.value = stepNumber;
    console.log(stepNumber);
}



// function Done(){
//     console.log(progressbar.attributes.max.value)
//    
// }


