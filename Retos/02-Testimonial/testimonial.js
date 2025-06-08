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
  ["LUCAS TERRY ", "Hasn't Heart"],
  ["TERRY IVANS", "Project Manager"],
  ["JACK PALANCE", "Believe it or not"],
  ["SKA -P", "Check to the king"],
];

let counter = 1;

// obtengo el texto testimonio
const testimonyTxt = document.getElementById("testimony");
testimonyTxt.innerHTML = testimoniesArray[counter];

// obtengo el autor
const testimonyAutor = document.getElementById("author-name");
testimonyAutor.innerHTML = autorsArray[counter][0];

// obtengo el rol del autor
const testimonyRole = document.getElementById("author-role");
testimonyRole.innerHTML = autorsArray[counter][1];

// obtengo la paginación de puntos
const pagesPoints = Array.from(document.getElementsByClassName("dot"));
// agrego add Listener a los pagesPoints
pagesPoints.forEach((point) => {
  //   console.log(point);
  point.addEventListener("click", navPage);
});

// obtengo la navegación de las flechas
const navArrows = document.getElementsByClassName("navigaton__arrows");
// agrego add Listener a los botones flecha
Array.from(navArrows).forEach((btn) => {
  btn.addEventListener("click", navigate);
});

function navPage(event) {
  //capturo el último dígito del ID para usarlo como index page
  let page = event.currentTarget.id.slice(-1);
  changePage(page);
  counter = page;
}

function navigate(event) {
  // identifico ID del boton clickeado
  let idEvent = event.currentTarget.id;

  if (idEvent === "right-arrow") {
    counter < 3 ? counter++ : (counter = 0);
    changePage(counter);
  }
  if (idEvent === "left-arrow") {
    counter > 0 ? counter-- : (counter = 3);
    changePage(counter);
  }
}

function changePage(page) {
  testimonyTxt.innerHTML = testimoniesArray[page];
  testimonyAutor.innerHTML = autorsArray[page][0];
  testimonyRole.innerHTML = autorsArray[page][1];

  pagesPoints.forEach((el) => el.classList.remove("dot--select"));
  pagesPoints[page].classList.add("dot--select");

  console.log("PÁGINA " + (page + 1));
}
