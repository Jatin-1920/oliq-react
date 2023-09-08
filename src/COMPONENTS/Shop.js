import React from "react";
import HomeProduct from "./HomeProduct";
import Footer from "./Footer";
import Recipe from "./recipe";
import Anim from "./anim";
class Shop extends React.Component{
    render() {
        return(
            <>
        <div className="shop-section">
            <div className="shop-image">
            <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/6464a9995ae7c51a43b847bd_hero_shop.jpg"/>
            <div className="shop-overlay"></div>
            </div>
            <div className="shop-home">
                <h1 className="shop-heading">Shop Our 100% Natural Oil</h1>
                <p className="p">We're always here to help. Whether you have a question about our products or services, want to provide feedback, or need assistance with your order.</p>
            </div>
        </div>
        <div className="product-section">
        <div className="product">
          {this.props.Oils.map((product,key) => (
            <HomeProduct  key={key} index={key} data={product} addToOrder={this.props.addToOrder} />
          ))}
        </div>
      </div>
<Anim />
<Recipe />
        <div className="dish-section">
            <div className="dish-img">
              <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64636dc5236c4d9dee73eb30_olive-oil-branch.webp" />
            </div>
            <div className=" dish-text-col shop-foot-dish">
            <p className="p newsletter-p">Subscribe and get a 10% discount on your first purchase</p>
            <h1 className="dish-text-shop">Don't miss out on exclusive deals, new products, and Italian food inspiration. Sign up now to save on our high-quality olive oils.</h1>
            <form className="form" id="form">
              <input type="email" className="email" placeholder="Enter Your Email" required/>
            <input type="submit" value="SIGN UP" className="sign-up"/>
            </form>
          </div>
          </div>
<Footer />


      </>
        )
    }
}

export default Shop;