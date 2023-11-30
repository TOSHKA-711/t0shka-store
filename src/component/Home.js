import homeImg from "../imgs/home-image2.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-img">
          <img src={homeImg} alt="homeImg" />
        </div>
        <div className="home-text">
          <h1>T0SHKA ST0RE—</h1>
          <h1>built for commerce</h1>
          <p>
            Take your store from launch to scale with themes that make selling
            easy.
          </p>
          <Link to="/products">
            <button className="product-btn"> See Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
