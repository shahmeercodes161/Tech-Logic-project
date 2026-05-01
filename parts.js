
// const productsLine1 = [ { name: "Honda_white_side_mirror", price: 1400, rating: 4.5, img: "./Assets/hondasidemirror.jpg" },
//  { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic1986piston.jpg" }, 
//  { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/markxbumper.jpg" },
//   { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/everylcd.jpg" }, ];
// const container1 = document.querySelector(".item-line-1");

// productsLine1.forEach((product) => {
//   const card = document.createElement("div");
//   card.className = "product-card";

//   const img = document.createElement("img");
//   img.src = product.img;
//   img.alt = product.name;
//   img.style.borderRadius = "15px"; 
// // Inside your forEach loop:

// // 1. Make the image corners curved (border-radius)

// // 2. Change text color to white
// const name = document.createElement("p");
// name.innerText = product.name;
// name.style.color = "white";

// const stars = document.createElement("p");
// stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;
// stars.style.color = "white";

// const price = document.createElement("p");
// price.innerText = "Price " + product.price + "$";
// price.style.color = "white";
// // Define the logic once
// function createProductCards(products, container) {
//   products.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "product-card";

//     const img = document.createElement("img");
//     img.src = product.img;
//     img.style.borderRadius = "15px";

//     const name = document.createElement("p");
//     name.innerText = product.name;
//     name.style.color = "white";

//     const linkButton = document.createElement("button");
//     linkButton.innerText = "Visit Website";
//     linkButton.style.width = "100%"; // Horizontal look
//     linkButton.style.borderRadius = "8px";
//     linkButton.style.backgroundColor = "#007bff";
//     linkButton.style.color = "white";

//     linkButton.addEventListener("click", () => {
//       window.open("https://www.google.com", "_blank");
//     });

//     // Everything goes inside the card
//     card.append(img, name, linkButton);
//     container.appendChild(card);


//   card.append(img, name, stars, price);
//   container1.appendChild(card);
// });
// createProductCards(productsLine1, container1);
// createProductCards(productsLine2, container2);
// createProductCards(productsLine3, container3);
// const productsLine2 = [ { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/hondasidemirror.jpg" },
//    { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic1986piston.jpg" }, 
//    { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/markxbumper.jpg" }, 
//    { name: "every_lcd", price: 1100, rating: 5.0, img: "./Assets/everylcd.jpg" }, ];

// const container2 = document.querySelector(".item-line-2");

// productsLine2.forEach((product) => {
//   const card = document.createElement("div");
//   card.className = "product-card";

//   const img = document.createElement("img");
//   img.src = product.img;
//   img.alt = product.name;
//   img.style.borderRadius = "15px"; 
// // Inside your forEach loop:

// // 1. Make the image corners curved (border-radius)

// // 2. Change text color to white
// const name = document.createElement("p");
// name.innerText = product.name;
// name.style.color = "white";

// const stars = document.createElement("p");
// stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;
// stars.style.color = "white";

// const price = document.createElement("p");
// price.innerText = "Price " + product.price + "$";
// price.style.color = "white";


//   card.append(img, name, stars, price);
//   container2.appendChild(card);
// });

// const productsLine3 = [ { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/hondasidemirror.jpg" },
//    { name: "Civiv 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic1986piston.jpg" }, 
//    { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/markxbumper.jpg" },
//     { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/everylcd.jpg" }, ];
// const container3 = document.querySelector(".item-line-3");

// productsLine3.forEach((product) => {
//   const card = document.createElement("div");
//   card.className = "product-card";

//   const img = document.createElement("img");
//   img.src = product.img;
//   img.alt = product.name;
//   img.style.borderRadius = "15px"; 
// // Inside your forEach loop:

// // 1. Make the image corners curved (border-radius)

// // 2. Change text color to white
// const name = document.createElement("p");
// name.innerText = product.name;
// name.style.color = "white";
// const stars = document.createElement("p");
// stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;
// stars.style.color = "white";

// const price = document.createElement("p");
// price.innerText = "Price " + product.price + "$";
// price.style.color = "white";

// card.append(img, name, stars, price);
// container3.appendChild(card);
// });

// const productsLine4 = [ { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/hondasidemirror.jpg" },
//   { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic1986piston.jpg" },
//   { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/markxbumper.jpg" },
//   { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/everylcd.jpg" }, ];
//   const container4 = document.querySelector(".item-line-4");
  
//   productsLine4.forEach((product) => {
//     const card = document.createElement("div");
//     card.className = "product-card";
    
//     const img = document.createElement("img");
//     img.src = product.img;
//     img.alt = product.name;
//     // Inside your forEach loop:
    
//     // 1. Make the image corners curved (border-radius)
//     img.style.borderRadius = "15px"; 
    
//     // 2. Change text color to white
//     const name = document.createElement("p");
//     name.innerText = product.name;
//     name.style.color = "white";
    
//     const stars = document.createElement("p");
//     stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;
//     stars.style.color = "white";
    
//     const price = document.createElement("p");
//     price.innerText = "Price " + product.price + "$";
//     price.style.color = "white";

//   card.append(img, name, stars, price);
//   container4.appendChild(card);
// });

// const productsLine5 = [ { name: "Honda_white_side mirror", price: 1400, rating: 4.5, img: "./Assets/hondasidemirror.jpg" },
//    { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic1986piston.jpg" }, 
//    { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/markxbumper.jpg" }, 
//    { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/everylcd.jpg" }, ];
// const container5 = document.querySelector(".item-line-5");

// productsLine5.forEach((product) => {
//   const card = document.createElement("div");
//   card.className = "product-card";

//   const img = document.createElement("img");
//   img.src = product.img;
//   img.alt = product.name;
// // Inside your forEach loop:

// // 1. Make the image corners curved (border-radius)
// img.style.borderRadius = "15px"; 

// // 2. Change text color to white
// name.style.color = "white";
// stars.style.color = "white";
// price.style.color = "white";
//   const name = document.createElement("p");
//   name.innerText = product.name;

//   const stars = document.createElement("p");
//   stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;

//   const price = document.createElement("p");
//   price.innerText = "Price " + product.price + "$";

//   card.append(img, name, stars, price);
//   container5.appendChild(card);
// });
// --- 1. DEFINE THE FUNCTION FIRST ---
// This function creates the cards for any list you give it.
function createProductCards(products, container) {
  if (!container) return; // Safety check if container doesn't exist

  products.forEach((product) => {
    // Create the card div
    const card = document.createElement("div");
    card.className = "product-card";

    // Create Image and add curved border
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    img.style.borderRadius = "15px"; 

    // Create Name and make it white
    const name = document.createElement("p");
    name.innerText = product.name;
    name.style.color = "white";

    // Create Stars and make them white
    const stars = document.createElement("p");
    stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;
    stars.style.color = "white";

    // Create Price and make it white
    const price = document.createElement("p");
    price.innerText = "Price " + product.price + "$";
    price.style.color = "white";

    // Create the Button
    const linkButton = document.createElement("button");
    linkButton.innerText = "Visit Website";
    linkButton.style.width = "100%"; 
    linkButton.style.marginTop = "10px";
    linkButton.style.padding = "10px";
    linkButton.style.backgroundColor = "#007bff";
    linkButton.style.color = "white";
    linkButton.style.border = "none";
    linkButton.style.borderRadius = "8px";
    linkButton.style.cursor = "pointer";

    // Button click action
    linkButton.addEventListener("click", () => {
      window.open("https://www.google.com", "_blank");
    });

    // Put everything inside the card
    card.append(img, name, stars, price, linkButton);
    
    // Put the card inside the container
    container.appendChild(card);
  });
}

// --- 2. DEFINE YOUR DATA ARRAYS ---
const productsLine1 = [
  { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./Assets/hondasidemirror.jpg" },
  { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./Assets/civic1986piston.jpg" },
  { name: "mark x bumper", price: 1300, rating: 3.5, img: "./Assets/markxbumper.jpg" },
  { name: "every lcd", price: 1100, rating: 5.0, img: "./Assets/everylcd.jpg" }
];

const productsLine2 = [...productsLine1]; // Copying for demo
const productsLine3 = [...productsLine1];
const productsLine4 = [...productsLine1];
const productsLine5 = [...productsLine1];

// --- 3. SELECT YOUR CONTAINERS ---
const container1 = document.querySelector(".item-line-1");
const container2 = document.querySelector(".item-line-2");
const container3 = document.querySelector(".item-line-3");
const container4 = document.querySelector(".item-line-4");
const container5 = document.querySelector(".item-line-5");

// --- 4. CALL THE FUNCTION FOR EACH LINE ---
createProductCards(productsLine1, container1);
createProductCards(productsLine2, container2);
createProductCards(productsLine3, container3);
createProductCards(productsLine4, container4);
createProductCards(productsLine5, container5);