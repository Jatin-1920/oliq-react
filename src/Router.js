import React from "react";
import{BrowserRouter as Main,Route,Routes} from "react-router-dom"
import Home from "./COMPONENTS/Home";
import Shop from "./COMPONENTS/Shop";
import Nav from "./COMPONENTS/Nav ";
import AllOils from "./DATA/alloils";
import Error from "./COMPONENTS/Error Page";
class Routed extends React.Component{
    state = {
        oils:AllOils,
        order:{},
    }
  
componentDidMount() {
    const localStorageRef = localStorage.getItem("order")

    if(localStorageRef) {
        this.setState({order: JSON.parse(localStorageRef)})
    }
}

componentDidUpdate() {
    localStorage.setItem("order",JSON.stringify(this.state.order))
}

    addToOrder = (key) =>{
        const order = {...this.state.order}
        order[key] = order[key] + 1 || 1;

        this.setState({order})
        
    }
    delete = (key)=>{
       const order  = {...this.state.order}
       delete order[key]
       this.setState({order})
    }
    increment = (key) => {
        const order = {...this.state.order}
        order[key] = order[key] + 1 ;

        this.setState({order})
    }

    decrement = (key) => {
        const order = {...this.state.order}
        order[key] = order[key] - 1 ;
if(order[key] === 0) {
    delete order[key]
} 
        this.setState({order})
    }

   
    render() {
        
        return(
<Main>
    <Nav Oils={this.state.oils}  Order={this.state.order} delete={this.delete} increment={this.increment} decrement={this.decrement} />
    <Routes >
        <Route path="/" element={<Home Oils={this.state.oils} addToOrder={this.addToOrder}/>}/>
        <Route path="/shop" element={<Shop Oils={this.state.oils} addToOrder={this.addToOrder}/>}/>
        <Route path="*" element={<Error/>}/>
    </Routes>
</Main>
        )
    }
}

export default Routed;