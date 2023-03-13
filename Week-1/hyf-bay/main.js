console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const ul = document.createElement("ul");
const body = document.querySelector("body");
body.appendChild(ul);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `Title: ${products[i].name}<br>Price: ${products[i].price}<br>Rating: ${products[i].rating}<br><br>`;
    ul.appendChild(li);
  }
}

renderProducts(products);
