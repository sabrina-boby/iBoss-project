import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import "./ProductList.css";
import chair1 from "../../Assets/chair1.png";
import chair2 from "../../Assets/chair2.png";
import chair3 from "../../Assets/chair3.png";
import chair4 from "../../Assets/chair4.png";
import chair5 from "../../Assets/chair5.png";
import chair6 from "../../Assets/chair6.png";
// import Added from "../../Assets/Added.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
const Products = () => {
  const { products, addToCart } = useContext(AppContext);
  const imageMap = {
    chair1: chair1,
    chair2: chair2,
    chair3: chair3,
    chair4: chair4,
    chair5: chair5,
    chair6: chair6,
  };
  return (
    <>
    <Header></Header>
    <div className="container">
      <div className="menu">
        <button className="menu-item active">Rocking chair</button>
        <button className="menu-item">Side chair</button>
        <button className="menu-item">Lounge chair</button>
      </div>

      <div className="right-site">
        <div className="cards-section">
        {products.length > 0 ? (
        products.map(product => (
        <div className="card" key={product.id}>
          <img src={imageMap[product.image]} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="price">
            <span className="current-price">€{product.price}</span>
            <span className="original-price">€{product.originalPrice}</span>
            <span className="discount">{product.discount}</span>
          </p>
          <p className="description">{product.description}</p>
          <button onClick={() => addToCart(product)} className="add-to-cart">
            Add to cart
          </button>
        </div>
        ))
      ): (
        <p>No products available.</p>
      )}

        </div>
        {/* pagination */}
        <div className="pagination-parent">
          <div class="pagination">
            <button class="pagination-arrow" disabled>
              &lt;
            </button>
            <button class="pagination-button active">1</button>
            <button class="pagination-button">2</button>
            <span class="pagination-ellipsis">...</span>
            <button class="pagination-button">9</button>
            <button class="pagination-button">10</button>
            <button class="pagination-arrow">&gt;</button>
          </div>
        </div>
        {/* pagination */}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Products;
