/*
TODO: Реалізуй пошук автомобілів по сайту
TODO: Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
TODO: Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
TODO: Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку
 */
const refs = {
  carList: document.querySelector(".car-list"),
  carSearch: document.querySelector(".car-search"),
};
console.log(refs.carSearch);
const allCars = [
  {
    id: 1,
    brand: "Audi",
    model: "A6",
    price: 30000,
    img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
  },
  {
    id: 3,
    brand: "Audi",
    model: "Q7",
    price: 40000,
    img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
  },
  {
    id: 4,
    brand: "BMW",
    model: "5 siries",
    price: 9000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
  },
  {
    id: 5,
    brand: "Honda",
    model: "Accord",
    price: 20000,
    number: "+380000000000",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
  },
  {
    id: 6,
    brand: "Volvo",
    model: "XC60",
    price: 7000,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/2018_Volvo_XC60_R-Design_D5_P-Pulse_2.0_Front.jpg",
  },
];

/*
<li class="car-list-item">
  <img src="" alt="" class="car-list-img" />
  <div class="car-list-text-content">
    <h3 class="car-list-title"></h3>
    <p class="car-list-price"></p>
  </div>
</li>
*/

const createCard = (car) => {
  return `<li class="car-list-item">
    <img src="${car.img}" alt="${car.brand} ${car.model}" class="car-list-img" />
  <div class="car-list-text-content">
    <h3 class="car-list-title">${car.brand} ${car.model}</h3>
    <p class="car-list-price">${car.price}</p>
  </div>
</li>`;
};

const createGallery = allCars.map((item) => createCard(item)).join("");
refs.carList.innerHTML = createGallery;

const onCarSearchSubmit = (event) => {
  event.preventDefault();
  const formData = {
    query: event.currentTarget.elements.query.value.trim().toLowerCase(),
    option: event.currentTarget.elements.options.value,
  };

  console.log(formData);

  const filteredCar = allCars.filter(
    (car) => car[formData.option].toLowerCase() === formData.query,
  );

  if (filteredCar.length === 0) {
    alert("Результатів не знайдено!");
    refs.carList.innerHTML = createGallery;
    return;
  }
  const filteredCars = filteredCar.map((item) => createCard(item)).join("");
  refs.carList.innerHTML = filteredCars;
};

refs.carSearch.addEventListener("submit", onCarSearchSubmit);
