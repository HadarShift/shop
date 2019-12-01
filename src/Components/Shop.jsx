import React, { Component } from 'react';
import Items from './Items';
import ItemsInCart from './ItemsInCart';

export class Shop extends Component {
    state={
        itemList:this.props.itemList
        
    }
    

    render() {
        console.log(this.props.itemList);

        return (
            
            <div>
                <h1>hadar shop</h1>
                
                <Items itemList={this.state.itemList}></Items>
                <ItemsInCart itemList={this.state.itemList}></ItemsInCart>
            </div>
        )
    }
}

export default Shop
