import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";

function Cart() {
  const stateArr = useSelector((state) => state.clicked);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems([...stateArr]);
  }, [stateArr]);

  const handleDlt = (productId) => {
    const updatedCart = cartItems.filter((product) => product.id !== productId);
    setCartItems([...updatedCart]);
    console.log("Updated Cart:", updatedCart);
    console.log("Element deleted:", productId);
    console.log(productId);
  };

  return (
    <div className="cart">
      <div className="cart-container">
        {cartItems.map((product) => {
          return (
            <div className="card" key={product.id}>
              <div className="card-img">
                <img src={product.image} alt="" />
              </div>
              <div className="card-info">
                <p className="text-title">{product.category} </p>
                <p className="text-body added-text">
                  Added to cart <IoIosCloudDone />
                </p>
              </div>
              <div className="card-footer">
                <span className="text-title">{product.price} $</span>
                <div
                  className="card-button"
                  onClick={() => handleDlt(product.id)}
                >
                  Delete <MdDeleteOutline />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
