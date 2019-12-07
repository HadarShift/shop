import React, { Component } from 'react'


export class ItemDescription extends Component {
 
  

    render() {
        if(this.props.whichCase!="cart"){
        return (
            <div>
                <h2>{this.props.item.Name}</h2>
                <img src={this.props.item.Image}></img>
               
                    <button onClick={()=>this.props.InsertToCart(this.props.item)}>add to cart</button>
                
                
            </div>
        )
    }
        else{
            return (
                <div>
                    <h2>{this.props.item.Name}</h2>
                    <img src={this.props.item.Image}></img>
                    <button onClick={()=>this.props.RemoveFromCart(this.props.item)}>remove from cart</button>
                </div>
            )
        }
        
    }

   
}

export default ItemDescription
