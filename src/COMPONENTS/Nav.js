import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faClose,faHomeAlt,faShop,faBars} from '@fortawesome/free-solid-svg-icons';
import Order from "./Order";
function Nav(data) {
    const [nav,setNav] = useState(true);

    const [shop,setShop] = useState(true);
        return(
            <>
            <div className="nav container">
                <FontAwesomeIcon icon={faBars} className="bars" onClick={()=>{
                    setShop(!shop)
                }}/>
                <div className={shop ? "left-nav " : "left-nav open-nav"}>
                    <FontAwesomeIcon icon={faClose} className="close" onClick={()=>{
                        setShop(!shop)
                    }}/>
<Link to="/" className="link"  onClick={()=>{
                        setShop(!shop)
                    }}><FontAwesomeIcon icon={faHomeAlt}/>Home</Link>
<Link to="/shop" className="link"  onClick={()=>{
                        setShop(!shop)
                    }}><FontAwesomeIcon icon={faShop}/>Shop</Link>
</div>
<div className="middle-nav">
<Link to="/" className="logo"><img src="https://assets.website-files.com/6461e47502e4c76cc75be681/6461f184a323efa26e5580f2_oliq_logo.svg"/></Link> 
</div>
<div className="right-nav">
    <div className="cart">
    <FontAwesomeIcon  icon={faCartShopping} onClick={()=>
        setNav(!nav)
    }/>
    </div>
</div>

</div>
<div className={nav ? "orderbg" : "orderbg overlay"} onClick={()=>
        setNav(!nav)
    }></div>
<div className={nav ? "order" :"order cart-open"}>
    <div className="order-title">
        <h2>My Cart</h2>
        <FontAwesomeIcon icon={faClose} className="icon" onClick={()=>setNav(!nav)}/>
    </div>
   <Order Oils={data.Oils} Order={data.Order} delete={data.delete} increment={data.increment} decrement={data.decrement}/>
</div>


</>
        )
    }


export default Nav;
