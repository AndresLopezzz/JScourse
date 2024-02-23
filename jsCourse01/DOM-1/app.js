const toppings = document.getElementsByClassName("topping");

for (const topping of toppings) {
  topping.addEventListener("click", (nombreTopping) => {
    console.log(nombreTopping.target.innerText);
  });
}
