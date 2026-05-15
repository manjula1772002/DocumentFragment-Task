

console.time("DocumentFragment")
const products=[
  "product1", "product2", "product3", "product4", "product5",
  "product6", "product7", "product8", "product9", "product10",
  "product11", "product12", "product13", "product14", "product15",
  "product16", "product17", "product18", "product19", "product20",
  "product21", "product22", "product23", "product24", "product25",
  "product26", "product27", "product28", "product29", "product30",
  "product31", "product32", "product33", "product34", "product35",
  "product36", "product37", "product38", "product39", "product40",
  "product41", "product42", "product43", "product44", "product45",
  "product46", "product47", "product48", "product49", "product50"
];
const itemsLi = document.getElementById("items");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("submit");
const searchMessage = document.getElementById("message");

function renderProducts(list) {
  itemsLi.innerHTML = "";
  const fragment = document.createDocumentFragment();

  list.forEach(product => {
    const li = document.createElement("li");
    li.textContent = product;
    li.className = "product-items";
    fragment.append(li);
  });

  itemsLi.append(fragment);
}

function searchProduct(name) {
  if (!name) {
    searchMessage.textContent = "Showing all products.";
    renderProducts(products);
    return;
  }

  const lowerName = name.toLowerCase();
  const matches = products.filter(product =>
    product.toLowerCase().includes(lowerName)
  );

  if (matches.length > 0) {
    searchMessage.textContent = `Found ${matches.length} product(s).`;
    renderProducts(matches);
  } else {
    searchMessage.textContent = "Your product is not in this list.";
    itemsLi.innerHTML = "";
  }
}

renderProducts(products);
console.timeEnd("DocumentFragment");

searchButton.addEventListener("click", () => {
  searchProduct(searchInput.value.trim());
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchProduct(searchInput.value.trim());
  }
});