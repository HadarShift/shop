import React, { Component } from 'react'


export class ItemDescription extends Component {
 
  

    render() {
        console.log(this.props.item.Name)
        return (
            <div>
                <h2>{this.props.item.Name}</h2>
                <img src={this.props.item.Image}></img>
                <button onClick={()=>this.props.InsertToCart(this.props.item)}>add to cart</button>
            </div>
        )
    }

   
}

export default ItemDescription
