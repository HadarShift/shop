import React, { Component } from 'react'
import ItemDescription from './ItemDescription';

export class ItemsInCart extends Component {
    render() {
        console.log("hadar")
        console.log(this.props.ItemsInCart)
        return (
            <div>
                {/* this.props.ItemsInCart.map((obj) =>   
                        <ItemDescription key={obj.id} item={obj}></ItemDescription>
                    ) */}
            </div>
        )
    }
}

export default ItemsInCart
