import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FaCcPaypal,FaApplePay,FaCcMastercard,FaCcVisa } from 'react-icons/fa'
import {CSSTransition,TransitionGroup} from "react-transition-group"

class Order extends React.Component {
  
  renderOrder = (key) => {
    let oils = this.props.Oils[key] 
      
    const count = this.props.Order[key];
    const { image, name, price} = oils;

    return (
      <CSSTransition classNames="animedorder" key={key} timeout={{enter:0,exit:1000}}>
        <div className="cart-col" key={key}>
          <div className="cart-image">
            <img src={image} />
          </div>
          <div className="cart-data">
            <div className="cart-name">{name}</div>
            <div className="cart-price">${count*price}</div>
            <FontAwesomeIcon icon={faTrashAlt} className="trash" onClick={()=>{
              this.props.delete(key)
            }}/>
          </div>
          <div className="cart-qty">
            <div className="decrement" onClick={()=>{
              this.props.decrement(key)
            }}>
              -
            </div>
            <div className="qty">{count}</div>
            <div className="increment" onClick={()=>{
              this.props.increment(key)
            }}>
              +
            </div>
          </div>
        </div>
        </CSSTransition>
    );
  };

  
  
  render() {
    const orderIds = Object.keys(this.props.Order);
    const total = orderIds.reduce((prevTotal, key) => {
      const oils = this.props.Oils[key];
      const count = this.props.Order[key];
      const isAvailable = oils && oils.status === "available";
      if (isAvailable) {
        return prevTotal + ( count * oils.price);
      }
      return prevTotal;
    }, 0);
    return <div className="order-item">
      <div className="order-item-section">
        <TransitionGroup className="animedorder">
        {orderIds.map(this.renderOrder)}
        </TransitionGroup>
      </div>
      <div className="total-checkout">
      <div className="total">
        <span className="total-txt">Subtotal :</span>
        <span className="total-price">$ {total}</span>
      </div>
      <div className="checkout button" >Checkout</div>
    <div className="payment-details">
      <p>100%  Secure Payments</p>
      <div className="payment-icon">
        <FaApplePay/>
        <FaCcPaypal/>
        <FaCcVisa/>
        <FaCcMastercard/>
      </div>
    </div>
    </div>
    </div>
  }
}

export default Order;
