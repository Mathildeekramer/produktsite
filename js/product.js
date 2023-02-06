/*https://kea-alt-del.dk/t7/api/products/1525*/
fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector("p .brand").textContent = product.brandname;
  document.querySelector("p .sub").textContent = product.subcategory;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
