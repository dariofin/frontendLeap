// variables globales
let displayCero; // 👈🏽  variable para saber si el display tiene un 0
let resultado;
let valorActual;
let regOperacion;
let operacion;
let separador = false; // 👈🏽  variable para saber si el separador decimal fue usado
// variables RegExp
const rgExNum = /^\d/; //👈🏽 busco caracteres numéricos
const rgExTxt = /[a-zÇ\'\¡]/i; // 👈🏽  busco caractéres alfabéticos
const regExOper = /[+\-*\/%]/; // 👈🏽  busco los operadores

// ⬜️ OBTENGO ELEMENTOS DEL DOM

// capturo el contenedor de la calculadora
const contenedorCalc = document.getElementById("calculator");
// capturo el display de la calculadora
const display = document.getElementById("display");
// capturo los dígitos del display
const digitoDisplay = document.getElementById("digito-display");
digitoDisplay.value = "0";
displayCero = true; // 👈🏽  inicializo la variable en true para saber si el display tiene un 0

// capturo el digito del operador dentro del display
const digitoRegistro = document.getElementById("digito-registro");
digitoRegistro.value = null;

// capturo los botones de la calculadora y le agrego un event listener
const teclas = document.querySelectorAll(".keypad__key");
teclas.forEach((tecla) => {
  tecla.addEventListener("click", () => {
    HandlerDisplay(tecla.id);
  });
});

// ⬜️ MANEJO LOS EVENTOS

function HandlerDisplay(key) {
  // si el display tiene un 0 y el key es un número lo reemplazo por el número
  if (digitoDisplay.value === "0" && rgExNum.test(key) && displayCero) {
    digitoDisplay.value = key;
    digitoRegistro.value = digitoDisplay.value;
    displayCero = false;
    //
  } else if (rgExNum.test(key)) {
    /* ↘️ RECIBO NUMERO */
    separador = false; // vuelvo a inicializar el separador
    digitoDisplay.value += key;
    digitoRegistro.value = digitoDisplay.value;
    return;
    //
  } else if (key === "." || key === ",") {
    /* ↘️ RECIBO SEPARADOR DE DECIMALES */
    separador = true;
    digitoDisplay.value += ",";
    digitoRegistro.value = digitoDisplay.value;
    displayCero = false; // vuelvo a inicializar el displayCero
  } else if (key === "Clear") {
    /* ↘️ RECIBO AC */
    digitoDisplay.value = "0";
    digitoRegistro.value = "";
    displayCero = true; //
    // console.log("presionaste AC");
  } else if (key === "Backspace") {
    /* ↘️ RECIBO BACKSPACE */
    digitoDisplay.value = digitoDisplay.value.slice(0, -1);
    if (digitoDisplay.value.length === 0) {
      digitoDisplay.value = "0";
      displayCero = true;
    }
    return;
  }

  // si el key es un operador y el display no tiene un 0 lo concateno al display
  /* ↘️ RECIBO OPERADOR */
  else if (regExOper.test(key) && !displayCero) {
    let ultimodigito = digitoDisplay.value[digitoDisplay.value.length - 1];
    console.log("el ultimo digito  es " + ultimodigito);
    console.log("el key es " + key);
    if (ultimodigito === key) {
      // si el operador es igual al último dígito lo reemplazo por el nuevo operador
      digitoDisplay.value = digitoDisplay.value.slice(0, -1) + key;
    } else {
      digitoDisplay.value = digitoDisplay.value + key;
    }
  }

  // si el key es igual a "Enter" o "=" evalúo la operación
  else if (key === "Enter" || key === "=") {
    // ✅ EVALUO LA OPERACIÓN
    //suplanto la coma por un punto para que eval funcione
    // digitoRegistro.value = digitoRegistro.value.replace(/,/g, ".");
    regOperacion = digitoRegistro.value.replace(/,/g, ".");
    //evaluo la operación
    // resultado = eval(digitoRegistro.value);
    resultado = eval(regOperacion).toFixed(4); //convierto a número y limito a 4 decimales

    console.log("el resultado es " + resultado.replace(/\./g, ","));

    // vuelvo a suplantar la el punto por coma y muestro el resultado en el display
    // digitoDisplay.value = resultado.replace(/\./g, ",");

    // digitoDisplay.value = resultado.toString().replace(/\./g, ",");

    // let registro = digitoRegistro.value;
    // const resultadoFinal = AddBits(registro);
    digitoDisplay.value = resultado;

    digitoRegistro.value = digitoRegistro.value + "=" + resultado;
  }
}

// function AddBits(s) {
//   let total = 0;
//   let sep = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];

//   while (sep.length) {
//     total += parseFloat(sep.shift());
//   }
//   console.log("el resultado postalina sin eval es " + total);
//   return total;
// }

// function SplitResultado(resultado) {
//   console.log("pasé por la función SplitResultado");
//   // separo el resultado en un array
//   let arrayResultado = resultado.split(/(\+|\-|\*|\/|\%)/);
//   console.log(arrayResultado);
//   // elimino los espacios en blanco
//   arrayResultado = arrayResultado.map((item) => item.trim());
//   // elimino los elementos vacíos
//   arrayResultado = arrayResultado.filter((item) => item !== "");

//   return arrayResultado;
// }

// ⬜️ ESCUCHO LOS EVENTOS DEL TECLADO
onkeydown = (event) => {
  const key = event.key;
  HandlerDisplay(key);
};
// };

// ⚠️ ANALIZO EL INPUT
// function PulseDetect(key) {
//   // key === "Enter"
//   //   ? HandlerOp("=") // console.log("presionaste ENTER")
//   //   : //
//   //   key === "AC" // borro display
//   //   ? HandlerOp("AC")
//   //   : //
//   //   rgExNum.test(key)
//   //   ? HandlerNum(parseFloat(key)) //console.log(key + " es un número ")
//   //   : //
//   //   regExOper.test(key)
//   //   ? HandlerOp(key) // console.log(key + " es un operador")
//   //   : //
//   //     console.log(key + " NO SE LO QUE ES");
// }
