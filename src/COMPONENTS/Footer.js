import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram ,FaFacebook} from 'react-icons/fa'
function Footer () {
    return (
        <footer>
        <div className="social-image">
<div className="social-img">
  <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64620d05261180fa473a7c23_igpost%231.jpg"/>
  <div className="social-overlay"></div>
  <FaInstagram className="social-icon" />
</div>
<div className="social-img">
  <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64620d100fae23c844cd6df5_igpost%232.jpg"/>
  <div className="social-overlay"></div>
  <FaInstagram className="social-icon" />
</div>
<div className="social-img">
  <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64620d1ea786a6ebac76cce7_igpost%233.jpg"/>
  <div className="social-overlay"></div>
  <FaInstagram className="social-icon" />
</div>
<div className="social-img">
  <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64620d2af620b3a3ab888a00_igpost%234.jpg"/>
  <div className="social-overlay"></div>
  <FaInstagram className="social-icon" />
</div>
<div className="social-img">
  <img src="https://assets.website-files.com/6461e47502e4c76cc75be681/64620d3ca323efa26e723fad_igpost%235.jpg"/>
  <div className="social-overlay"></div>
  <FaInstagram className="social-icon" />
</div>
        </div>
        <div className="footer-nav">
          <div className="left-footer">
          <Link to="/home"><img src="https://assets.website-files.com/6461e47502e4c76cc75be681/6461f184a323efa26e5580f2_oliq_logo.svg"/></Link> 
          <div className="footer-social">
<FaInstagram/>
<FaFacebook/>
          </div>
          </div>
          <div className="mid-footer">
            <p className="p newsletter-p">SUBSCRIBE TO OUR NEWSLETTER</p>
            <p className="p newsletter-txt">You’ll receive a 15% discount on your first order</p>
            <form className="form" id="form-foot">
              <input type="email" className="email" placeholder="Enter Your Email" required/>
            <input type="submit" value="SIGN UP" className="sign-up"/>
            </form>
          </div>
          <div className="right-footer">
            <div className="footer-navlinks">
              <div className="footnav-cat">SHOP</div>
              <div className="footer-links">
                <Link className="flnks" to="/shop">SHOP ALL</Link>
                <div className="flnks">DRESSING OIL</div>
                <div className="flnks">COOKING OIL</div>
                <div className="flnks" >CHECKOUT PAGE</div>
              </div>
            </div>
            <div className="footer-navlinks">
            <div className="footnav-cat">DISCOVER</div>
              <div className="footer-links">
                <Link className="flnks" to="/">HOME</Link>
                <div className="flnks">ABOUT</div>
                <div className="flnks">BLOG</div>
                <div className="flnks">FAQs</div>
                <div className="flnks">CONTACT</div>
                <div className="flnks">PRIVACY POLICY</div>
              </div>
            </div>
            <div className="footer-navlinks">
            <div className="footnav-cat">INFORMATION</div>
              <div className="footer-links">
                <div className="flnks">COPYRIGHT</div>
                <div className="flnks">SUPPORT</div>
              </div>
            </div>
          </div>
        </div>
        </footer>
    )
}
export default Footer