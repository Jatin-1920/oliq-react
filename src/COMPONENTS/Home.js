import React from "react";
import { Link } from "react-router-dom";
import HomeProduct from "./HomeProduct";
import Footer from "./Footer";
import Anim from "./anim";
import Recipe from "./recipe";
class Home extends React.Component {
  constructor(props) {
    super(props);
}
  render () {
    return (
      <>
        <div className="Header">
          <div className="Header-main">
            <div className="left-header">
              <div className="left-content">
                <div className="left-text">
                  <h1>Your recipes have never tastes that good</h1>
                  <Link to="/shop" className="button">
                    SHOP NOW
                  </Link>
                </div>
                <div className="ltlcont">
                  <h3>AS SEEN IN</h3>
                  <div className="proof-logo">
                    <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/646207a5cb4945220cf86cb0_social-proof-logo1.svg" />
                    <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/646207b4ff1ff2c5801d0f5d_social-proof-logo2.svg" />
                    <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/646207be4d30162b256ffa1f_social-proof-logo3.svg" />
                    <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/646207c7736acb25c2e6d3cf_social-proof-logo4.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right-header"></div>
          </div>
<Anim />
        </div>
        <div className="About-smry container">
          <div className="smry-col">
            <h3>Unforgettable Taste</h3>
            <div className="smry">
              Our oil is made from the finest olives, using traditional Italian
              methods, and offers a unique taste experience that is perfect for
              enhancing any dish
            </div>
            <Link to="/" className="button">
              ABOUT US
            </Link>
          </div>
        </div>
        <div className="product-section container">
          <h1>Taste the favorites, our bestselling</h1>
          <div className="product home-product">
            {this.props.Oils.map((product,key) => (
              <HomeProduct  key={key} index={key} data={product} addToOrder={this.props.addToOrder} />
            ))}
          </div>
        </div>
        <div className="service-section">
          <div className="service-col">
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/6461fac3f59bb937c7056d00_high-quality_illustration.png" />
            <div className="service-details">
              <h1>Premium Taste</h1>
              <p className="p">
                Experience the authentic taste of Italy with our premium,
                high-quality oil.
              </p>
            </div>
          </div>
          <div className="service-col">
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/6461fad4085ca33e2d5354c6_secure_payments_illustration.png" />
            <div className="service-details">
              <h1>Secure Payments</h1>
              <p className="p">
                Shop with confidence knowing that your transactions are safe and
                secure.
              </p>
            </div>
          </div>
          <div className="service-col">
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/6461fae1a323efa26e600d58_sustainable_illustration.png" />
            <div className="service-details">
              <h1>Sustainable</h1>
              <p className="p">
                We use eco-friendly practices to protect the environment for
                future food lovers.
              </p>
            </div>
          </div>
          <div className="service-col">
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/6461faefa323efa26e601b36_fast_shipping_illustration.png" />
            <div className="service-details">
              <h1>Fast Shipping</h1>
              <p className="p">
                Get your hands on our delicious oil in no time with our speedy
                delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="oil-nav-section">
          <div className="cook-col oil-nav">
            <div>
              <img src="https://assets.website-files.com/6461e47502e4c76cc75be687/646204d12e4e16a20c91983d_dressing-oil-category-image-p-1080.webp" />
            </div>
            <div className="oil-nav-col">
              <div className="oil-nav-text">
                <h1>Dressing Oil</h1>
                <p className="p">For salad made in heaven</p>
              </div>
              <Link className="button">SHOP NOW</Link>
            </div>
          </div>
          <div className="dress-col oil-nav">
            <div>
              <img src="https://assets.website-files.com/6461e47502e4c76cc75be687/646204c5e297f1d612516e7c_cooking-oil-category-image.webp" />
            </div>
            <div className="oil-nav-col">
              <div className="oil-nav-text">
                <h1>Cooking Oil</h1>
                <p className="p">For your crunchy fries</p>
              </div>
              <Link className="button">SHOP NOW</Link>
            </div>
          </div>
        </div>
        <div className="process">
          <div className="process-details process-details1">
            <h1>The secret to our oil: The Meticulous Process</h1>
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64673326f711b41c93fa1321_olive-tree-branches-p-800.webp" />
          </div>
          <div className="process-details process-details2">
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/646733377daca386e32bb0b4_oil-pouring-p-800.webp" />
            <p className="p">
              At OLIQ, our oils are made from the finest Italian olives, using a
              meticulous process to preserve their flavor and quality. Discover
              our expertly crafted blends and experience the taste of true
              Italian excellence. Shop now and elevate your cooking game with
              our premium oils.
            </p>
            <Link className="button">TASTE IT</Link>
          </div>
        </div>

        <div className="article-section process">
          <div className="article-img art-col">
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be687/64636554a4b75e42e0922ce9_oliveoil-101.webp" />
          </div>
          <div className="article-text art-col">
            <p className="p">OUR LATEST ARTICLE</p>
            <div className="art-info">
              <h1>Olive Oil 101: Everything you need to know</h1>
              <p className="p">
                Not all olive oils are created equal. In this article, we will
                explore the differences between two common types of olive oil:
                extra virgin olive oil and regular olive oil.
              </p>
              <Link className="button">READ THE ARTICLE</Link>
            </div>
          </div>
        </div>
<Recipe />
        <div className="dish-section">
            <div className="dish-img">
              <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64636d92bf1d95ef80346607_bruschetta-tomatoes.webp" />
            </div>
            <div className="dish-text-col">
              <div className="dish-text">
                <p className="p">Taste the difference with OLIQ Olive Oil</p>
                <h1>
                  Elevate your Italian dishes with our premium olive oil.
                  Handpicked and cold-pressed. Rich in flavor and nutrients.
                </h1>
                <Link className="button" to="/shop">SHOP NOW</Link>
              </div>
            </div>
          </div>
        <Footer />
      </>
    );
  }
}
export default Home;
