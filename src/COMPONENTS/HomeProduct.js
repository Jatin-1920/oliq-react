import React from "react";

class HomeProduct extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }
    render() {
    const {image,name,price,status} = this.props.data
    const isAvailable = status ==="available"
    return (
        <div className="product-col">
<div className="img-col">
    <img src={image}/>
<button className={isAvailable?"add-to-order":"not-available"} disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? "ADD TO ORDER":"SOLD OUT !"} </button>
</div>
<div className="name">{name}</div>
<div className="price">$ {price}</div>
        </div>
    )
}
}

export default HomeProduct;