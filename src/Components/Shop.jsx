import React, { Component } from 'react';
import Items from './Items';
import ItemsInCart from './ItemsInCart';

export class Shop extends Component {
    state={
        itemList:this.props.itemList,
        itemInCart: []
    }

    insertToCart=(item) =>{
        let ItemInCartLocal=this.state.itemInCart
        ItemInCartLocal.push(item)
        console.log('לפני השמה')
        console.log(item.Id)
        this.setState({
            itemInCart:ItemInCartLocal, 
            itemList: this.state.itemList.filter(function(obj) { 
                {console.log(obj.Id)}
                return obj.Id != item.Id         
        })})
        console.log(this.state.itemInCart)
        console.log(this.state.itemList)
        
    }
    RemoveFromCart=(item) =>{
        let ItemReturnLocal=this.state.itemList 
        console.log(this.state.itemList)
        ItemReturnLocal.push(item)
        console.log('remove ItemReturnLocal')
        console.log(ItemReturnLocal)
        this.setState({
            itemList:ItemReturnLocal, 
            itemInCart: this.state.itemInCart.filter(function(obj) {       
                return item.Id != obj.Id          
        })})
    }


    render() {
        console.log(this.state.itemInCart);
        
        return (
            
            <div>
                <h1>hadar shop</h1>
                <h1>Items In shop</h1>
                <Items itemList={this.state.itemList} InsertToCart={this.insertToCart}></Items>
                {console.log('div main')}
                {console.log(this.state.itemList)}
                <h1>Items In Cart</h1>
                <ItemsInCart itemList={this.state.itemList} itemCart={this.state.itemInCart} RemoveFromCart={this.RemoveFromCart}></ItemsInCart>
            </div>
        )
    }

    getStyle =()=>{
        
    }
}

export default Shop
