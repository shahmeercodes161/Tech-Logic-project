
const productsLine1 = [ { name: "Honda_white_side_mirror", price: 1400, rating: 4.5, img: "./Assets/honda side mirror.jpg" }, { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic_1986_piston.jpg" }, { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/mark_x_bumper.jpg" }, { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/every_lcd.jpg" }, ];
const container1 = document.querySelector(".item-line-1");

productsLine1.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;

  const name = document.createElement("p");
  name.innerText = product.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + product.price + "$";

  card.append(img, name, stars, price);
  container1.appendChild(card);
});
const productsLine2 = [ { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/honda_side_mirror.jpg" }, { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic_1986_piston.jpg" }, { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/mark_x_bumper.jpg" }, { name: "every_lcd", price: 1100, rating: 5.0, img: "./Assets/every lcd.jpg" }, ];

const container2 = document.querySelector(".item-line-2");

productsLine2.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;

  const name = document.createElement("p");
  name.innerText = product.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + product.price + "$";

  card.append(img, name, stars, price);
  container2.appendChild(card);
});

const productsLine3 = [ { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/honda_side_mirror.jpg" }, { name: "Civiv 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic_1986_piston.jpg" }, { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/mark_x_bumper.jpg" }, { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/every_lcd.jpg" }, ];
const container3 = document.querySelector(".item-line-3");

productsLine3.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;

  const name = document.createElement("p");
  name.innerText = product.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + product.price + "$";

  card.append(img, name, stars, price);
  container3.appendChild(card);
});

const productsLine4 = [ { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/honda_side_mirror.jpg" }, { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic_1986_piston.jpg" }, { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/mark_x_bumper.jpg" }, { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/every_lcd.jpg" }, ];
const container4 = document.querySelector(".item-line-4");

productsLine4.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;

  const name = document.createElement("p");
  name.innerText = product.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + product.price + "$";

  card.append(img, name, stars, price);
  container4.appendChild(card);
});

const productsLine5 = [ { name: "Honda_white_side mirror", price: 1400, rating: 4.5, img: "./Assets/honda_side_mirror.jpg" }, { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic_1986_piston.jpg" }, { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/mark_x_bumper.jpg" }, { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/every_lcd.jpg" }, ];
const container5 = document.querySelector(".item-line-5");

productsLine5.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;

  const name = document.createElement("p");
  name.innerText = product.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + product.price + "$";

  card.append(img, name, stars, price);
  container5.appendChild(card);
});
