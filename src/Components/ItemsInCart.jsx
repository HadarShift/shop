import React, { Component } from 'react'
import ItemDescription from './ItemDescription';

export class ItemsInCart extends Component {
    render() {
        console.log((this.props.itemCart.length ==0))
        if(this.props.itemCart.length ==0){
            return(<div>עגלה ריקה</div>)
        }
        else{
            console.log("ehat")
            return(
                <div>
                    if(this.props.itemCart!=null){
                      this.props.itemCart.map((obj) =>   
                        <ItemDescription key={obj.id} item={obj} whichCase={'cart'} RemoveFromCart={this.props.RemoveFromCart}></ItemDescription>
                        )
                    }
                </div>
            )
        }
    }
}

export default ItemsInCart
