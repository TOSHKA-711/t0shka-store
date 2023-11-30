import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function Products() {
  const apiUrl = "https://fakeapidata.com/products/";

  const [products, setProducts] = useState([]);

  let redState = useSelector((state) => state);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="products">
      <div className="products-container">
        {products.map((product) => {
          const handleBuy = (e) => {
            redState.clicked.push(product);
            console.log(redState.clicked);
            e.target.innerText = "ADDED";
            console.log(product.id);
          };

          return (
            <div class="card" key={product.id}>
              <div class="card-img">
                <img src={product.image} alt="" />
              </div>
              <div class="card-info">
                <p class="text-title">{product.category} </p>
                <p class="text-body">
                  Your perfect pack for everyday use and walks in the forest.
                  Stash your laptop (up...
                </p>
              </div>
              <div class="card-footer">
                <span class="text-title">{product.price} $</span>
                <div
                  onClick={handleBuy}
                  data-tooltip="Price:-$20"
                  class="card-button  buy-btn"
                  id="buy-btn"
                >
                  <div class="button-wrapper">
                    <div class="text">Buy Now</div>
                    <span class="icon">
                      <svg
                        viewBox="0 0 16 16"
                        class="bi bi-cart2"
                        fill="currentColor"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
