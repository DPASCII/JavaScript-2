console.log("Script loaded");

//store all the products
const products = getAvailableProducts();
console.log(products);

//create ul element
const ul = document.createElement("ul");
const main = document.querySelector("main");
main.appendChild(ul);

//render function
function renderProducts(products) {
  products.forEach((x) => {
    let li = document.createElement("li");
    li.innerHTML = `Title: ${x.name}<br>Price: ${x.price}<br>Rating: ${x.rating}<br><br>`;
    ul.appendChild(li);
  });
}

//store filters using event listener
document.getElementById("item").addEventListener("keyup", function (event) {
  ul.innerHTML = "";
  const filter = {
    Title: "",
    Price: 10000,
  };
  filter.Title = document.getElementById("item").value;
  console.log(filter.Title);
  if (document.getElementById("maxPrice").value > 0) {
    filter.Price = document.getElementById("maxPrice").value;
  }
  let filteredProducts = products;
  //filter products

  Object.keys(filter).forEach((fil) => {
    if (fil === "Title") {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.name.toLowerCase().startsWith(filter.Title.trim().toLowerCase())
      );
    }
    if (fil === "Price") {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.price <= filter.Price
      );
    }
  });

  //render filtered products
  renderProducts(filteredProducts);
});

document.getElementById("maxPrice").addEventListener("keyup", function (event) {
  ul.innerHTML = "";
  const filter = {
    Title: document.getElementById("item").value,
    Price: 0,
  };
  filter.Price = document.getElementById("maxPrice").value;
  console.log(filter.Title);
  // if (document.getElementById("item").value != "") {
  //   filter.Title = document.getElementById("Title").value;
  // }
  let filteredProducts = products;
  //filter products

  Object.keys(filter).forEach((fil) => {
    if (fil === "Title") {
      filteredProducts = filteredProducts.filter((prod) =>
        prod.name.toLowerCase().startsWith(filter.Title.trim().toLowerCase())
      );
    }
    if (fil === "Price") {
      filteredProducts = filteredProducts.filter(
        (prod) => prod.price <= filter.Price
      );
    }
  });

  //render filtered products
  renderProducts(filteredProducts);
});
