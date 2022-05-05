import React from "react";
import "./MyCart.css";
import mycart from "./img/OIP.jpg";

export default function MyCart() {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h2 className="mycard_h2">My Cart</h2>
          <div className="row">
            <div>
              <img src={mycart} style={{ width: "190px" }} />
            </div>
            <h4 className="mycart mt-5">
              <b>Your Cart is empty !</b>
            </h4>
            <br />
            <p> Add items to it now...</p>
            <div>
              <button type="button mt-2" class="btn btn-primary btn-lg">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_space">
        <div className="footer">
          <div className="container">
            <div className="row">
              <span>
                Policies : Returns Policy | Terms of use | Security | Privacy
                |infrigment{" "}
                <span className="span">&copy; 2007-2022 Flipkart.com</span>
                <span className="span_2">
                  Need help? Visit the <a href="">Help Center</a>or
                  <a href="">Contact Us</a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
