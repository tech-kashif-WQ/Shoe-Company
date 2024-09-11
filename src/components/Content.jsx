import React from "react";

const Content = () => {
  return (
    <section>
      <div className="container">
        <div className="content-wrapper">
          <div className="first-box">
            <h1 className="title">
              YOUR FEET DESERVE
              <br /> THE BEST
            </h1>
            <h6 className="desc">
              YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
              SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
              OUR SHOES.
            </h6>
            <div className="btns">
              <button className="shop-now">Shop Now</button>
              <button className="category">Category</button>
            </div>
            <p className="para">Also Available On</p>
            <div className="images">
              <img src="images1/flipkart.png" alt="Flipkart" id="facebook" />
              <img src="images1/amazon.png" alt="Amazon" id="amazon" />
            </div>
          </div>
          <div className="second-box">
            <img src="images1/shoe_image.png" alt="Shoe" id="shoe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
