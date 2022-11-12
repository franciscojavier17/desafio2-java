let imagen = document.querySelector("#imagen");
let interruptor = false;

//agregue el borde de color negro (no rojo como dice en la guia) por el color de img

imagen.addEventListener("click", () => {
  if (interruptor == false) {
    imagen.style.border = "solid black 8px";
    interruptor = true;
  } else {
    imagen.style.border = "none";
    interruptor = false;
  }
});
let cantidad1 = document.querySelector("#contador1");
let cantidad2 = document.querySelector("#contador2");
let cantidad3 = document.querySelector("#contador3");
let message = document.querySelector("#message");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
  summation =
    parseInt(cantidad1.value) +
    parseInt(cantidad2.value) +
    parseInt(cantidad3.value);
  if (summation <= 0) {
    message.innerHTML = `No llevas ningun sticker!`;
  } else if (summation === 1) {
    message.innerHTML = "Llevas 1 sticker!";
  } else if (summation <= 10) {
    message.innerHTML = `Llevas ${summation} stickers!`;
  } else message.innerHTML = `Cuidado, llevas demasiados stickers!`;
});

let dig1 = document.querySelector("#digit-1");
let dig2 = document.querySelector("#digit-2");
let dig3 = document.querySelector("#digit-3");
let message2 = document.querySelector("#message2");
let button2 = document.querySelector("#button2");

button2.addEventListener("click", () => {
  concate = dig1.value + dig2.value + dig3.value;
  if (concate === "911") {
    message2.innerHTML = "Contraseña: Correcta!";
  } else if (concate === "714") {
    message2.innerHTML = "Contraseña: Correcta!";
  } else {
    message2.innerHTML = "Contraseña: Incorrecta";
  }
});