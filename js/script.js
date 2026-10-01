use strict;

const car List = [
  {
    id: "redCar"
    brand: "Ford",
    model: "Mustang",
    year: 1974,
    color: "red"
  },
  {
    id: "policeCar",
    brand "Volvo",
    model: "242",
    year: 1982
    color: "white"
  }
];

const infoBox = document.querySelector("#car-info";
const buttons = document.querySelectorAll".car-button");

function showCar(car {
  infoBox.innerHTML = <h2>${car.brand} ${car.model}</h2>;
}

buttons.forEach((button) => {
  button.addEventListener("click" () => {
    const carId = button.dataset.car;
    const selectedCar = car List.find((car) => car.id === carId);

    if selectedCar) {
      showCar(selectedCar);
    }
  });
});
