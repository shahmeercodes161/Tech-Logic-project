const productsLine1 = [
  { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/images/shirt1.png" },
  { name: "Civiv 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/images/shirt-2.png" },
  { name: "mark x bumper",       price: 1300, rating: 3.5, img: "./Assets/images/pant-1.png" },
  { name: "every lcd",      price: 1100, rating: 5.0, img: "./Assets/images/shirt-3.png" },
];

const container = document.querySelector(".item-box5");

productsLine1.forEach((productsLine1) => {
  const card = document.createElement("div");
  card.setAttribute("class", "product-card");

  const img = document.createElement("img");
  img.setAttribute("src", productsLine1.img);  
  img.setAttribute("alt", productsLine1.name);

  const name = document.createElement("p");
  name.innerText = productsLine1.name;

  const stars = document.createElement("p");
  stars.innerHTML = "⭐".repeat(Math.floor(productsLine1.rating)) + ` ${productsLine1.rating}/5`;

  const price = document.createElement("p");
  price.innerText = "Price " + productsLine1.price + "$";

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(stars);
  card.appendChild(price);

  container.appendChild(card);
});
