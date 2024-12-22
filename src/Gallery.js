import React from 'react';
import './style.css';
function Gallery() {
  const products = [
    { name: 'Graphic card rtx 4070', image: 'photos/graphic.jpg', price: 490 },
    { name: 'Iphone 16 pro max', image: 'photos/iphone1.jpg', price: 100 },
    { name: 'Macbook Air M1', image: 'photos/macbookM1.webp', price: 200 },
    { name: 'One plus 12R', image: 'photos/oneplus.jpg', price: 300 },
    { name: 'Western Shirts', image: 'photos/s5.jpg', price: 80 },
    { name: 'Diesel watch', image: 'photos/watch.jpg', price: 70 },
    { name: 'Printed Shirt', image: 'photos/shirt.jpg', price: 40 },
    { name: 'US Polo Assn Shoes', image: 'photos/shoes.jpg', price: 70 },
  ];

  const addToCart = (item, image, price) => {
    let cartCount = 0;
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartCount++;
    document.getElementById('cartCount').innerText = cartCount;
    cartItems.push({ item, image, price });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(item + " added to cart!");
  };

  return (
    <div className="vec">
      {products.map((product, index) => (
        <div className="responsive" key={index}>
          <div className="gallery">
            <img src={product.image} alt={product.name} width="600" height="400" />
            <div className="desc">
              <h2>{product.name}<br />Price :{product.price}$</h2>
              <form action="confirmation.html">
                <input type="submit" value="Buy now" />
              </form>
              <button onClick={() => addToCart(product.name, product.image, product.price)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
