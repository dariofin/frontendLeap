// TESTIMONIOS
const testimony00 =
  "Eaque voluptatem a quibusdam illum perferendis magni dolor atque quam unde quis reprehenderit";
const testimony01 =
  "Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.";

const testimony02 =
  "Dugit odit nesciunt rerum molestias! Natus laboriosam error tempore soluta debitis maiores ratione officia velit.";

const testimony03 =
  "Quidem inventore harum eius cupiditate minus quos hic vitae quia eum iure. I also like that it can ";

const testimoniesArray = [testimony00, testimony01, testimony02, testimony03];

const autorsArray = [
  "TERRY IVANS1",
  "TERRY IVANS",
  "JACK PALACE ",
  "CRISTIAN ANDAERS",
];
// OBTENGO LOS ELEMENTOS NECESARIOS
// const testimonyText = document.getElementById("testimony01");
// testimonyText.textContent = testimony01;
// console.log(testimonyText.textContent);

let counter = 1;

// obtengo el texto testimonio
const testimonyTxt = document.getElementById("testimony");
testimonyTxt.innerHTML = testimoniesArray[counter];

// obtengo el autor
const testimonyAutor = document.getElementById("testimony-autor");
console.log(testimonyAutor.children[1].textContent);

// obtengo la paginación de puntos
const pagination = document.getElementsByClassName("pages-point");
// console.log(pagination[counter].classList.value);

//recorrerlo y cambiar la clase cuando se haga click en la navegación

// obtengo la navegación
const navArrows = document.getElementsByClassName("navigaton__arrows");
// console.log(navArrows);

// agrego add Listener a los botones
Array.from(navArrows).forEach((btn) => {
  //   console.log(btn);
  btn.addEventListener("click", navigate);
});

function navigate(event) {
  // identifico el boton clickeado
  let idEvent = event.currentTarget.id;

  if (idEvent === "right-arrow") {
    // nextPage(counter);

    if (counter < 3) {
      counter++;
      nextPage(counter);
    } else {
      testimonyTxt.innerHTML = testimoniesArray[0];

      testimonyAutor.innerHTML = autorsArray[0];
      counter = 0;
      nextPage(counter);
      console.log("counter es +: " + counter);
    }
  } else if (idEvent === "left-arrow") {
    if (counter > 0) {
      counter--;
      prevPage(counter);
    } else {
      counter = 3;
      console.log("counter es: " + counter);
      prevPage(counter);
    }
  }
}

function nextPage(page) {
  testimonyTxt.innerHTML = testimoniesArray[page];
  testimonyAutor.textContent = autorsArray[page];
  console.log(testimonyAutor);
  //   console.log(pagination[counter].classList.value);
  Array.from(pagination).forEach((el) =>
    el.classList.remove("pages-point--selected"),
  );
  pagination[counter].classList.add("pages-point--selected");
  //   pagination[counter].classList.add("pages-point--selected");
}

function prevPage(page) {
  testimonyTxt.innerHTML = testimoniesArray[page];
  testimonyAutor.textContent = autorsArray[page];

  console.log(pagination[counter].classList.value);
  Array.from(pagination).forEach((el) =>
    el.classList.remove("pages-point--selected"),
  );
  pagination[counter].classList.add("pages-point--selected");
  //   pagination[counter].classList.add("pages-point--selected");
}
