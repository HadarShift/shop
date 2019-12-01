import React, { Component } from 'react';
import Items from './Items';
import ItemsInCart from './ItemsInCart';

export class Shop extends Component {
    state={
        itemList:this.props.itemList,
        itemInCart: []
    }
    insertToCart=(item) =>{
        console.log("button")
        let ItemInCartLocal=this.state.itemInCart
        ItemInCartLocal.push(item)
        console.log(ItemInCartLocal)
        
    }

    render() {
        console.log(this.props.itemList);

        return (
            
            <div>
                <h1>hadar shop</h1>
                
                <Items itemList={this.state.itemList} InsertToCart={this.insertToCart}></Items>
                <ItemsInCart itemList={this.state.itemList} itemCart={this.state.itemInCart}></ItemsInCart>
            </div>
        )
    }
}

export default Shop
