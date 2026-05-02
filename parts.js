
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
//   container5.appendChild(card) // Adds it to the very top

// --- 2. PRODUCT CARD FUNCTION ---
// This handles curved borders, white text, and horizontal buttons
// 1. THE FUNCTION (Kaam karne ka tariqa)

const searchContainer = document.createElement("div");
searchContainer.style.width = "100%";
searchContainer.style.display = "flex";
searchContainer.style.justifyContent = "center";
searchContainer.style.margin = "30px 0";

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Search for spare parts...";
searchInput.style.width = "60%";
searchInput.style.padding = "15px";
searchInput.style.borderRadius = "30px 0 0 30px";
searchInput.style.border = "1px solid #ccc";
searchInput.style.outline = "none";

const searchButton = document.createElement("button");
searchButton.innerText = "Search";
searchButton.style.padding = "15px 25px";
searchButton.style.backgroundColor = "#007bff";
searchButton.style.color = "white";
searchButton.style.border = "none";
searchButton.style.borderRadius = "0 30px 30px 0";
searchButton.style.cursor = "pointer";

searchContainer.append(searchInput, searchButton);
// 1. First, find your navbar in the HTML
const navbar = document.querySelector("nav"); 

// 2. Instead of 'prepend', use 'insertAdjacentElement'
if (navbar) {
    // This places the search bar right AFTER the navbar
    navbar.insertAdjacentElement("afterend", searchContainer);
} else {
    // This is a backup if the navbar isn't found
    document.body.prepend(searchContainer);
}
function createProductCards(products, container) {
    if (!container) {
        console.error("Container not found!");
        return;
    }

    products.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = product.img;
        img.style.borderRadius = "15px";
        img.style.width = "100%";

        const name = document.createElement("p");
        name.innerText = product.name;
        name.style.color = "white";

        const stars = document.createElement("p");
        stars.innerHTML = "⭐".repeat(Math.floor(product.rating)) + ` ${product.rating}/5`;
        stars.style.color = "white";

        const price = document.createElement("p");
        price.innerText = "Price: " + product.price + "$";
        price.style.color = "white";

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

        linkButton.addEventListener("click", () => {
            window.open("https://www.google.com", "_blank");
        });

        card.append(img, name, stars, price, linkButton);
        container.appendChild(card);
    });
}

// 2. DATA (Maloomat)
const productsData = [
    { name: "Honda white side mirror", price: 1400, rating: 4.5, img: "./assets/hondasidemirror.jpg" },
    { name: "Civic 1986 pistons", price: 1420, rating: 4.0, img: "./assets/civic1986piston.jpg" },
    { name: "mark x bumper", price: 1300, rating: 3.5, img: "./assets/markxbumper.jpg" },
    { name: "every lcd", price: 1100, rating: 5.0, img: "./assets/everylcd.jpg" }
];

// 3. EXECUTION (Chalaana)
const c1 = document.querySelector(".item-line-1");
const c2 = document.querySelector(".item-line-2");
const c3 = document.querySelector(".item-line-3");
const c4 = document.querySelector(".item-line-4");
const c5 = document.querySelector(".item-line-5");

createProductCards(productsData, c1);
createProductCards(productsData, c2);
createProductCards(productsData, c3);
createProductCards(productsData, c4);
createProductCards(productsData, c5);