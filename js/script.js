function addToWishlist(name, price, image){
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push({name, price, image});
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert(name + " added to wishlist ❤️");
}

function addToCart(name, price, image){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price, image});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart 🛒");
}
