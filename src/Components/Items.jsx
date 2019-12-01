import React, { Component } from 'react';
import ItemDescription from './ItemDescription';

export class Items extends Component {
    


    render() {
        console.log("hey")
        // console.log(this.props.itemList)                   

        return (
            <div>
                {
                    this.props.itemList.map((obj) =>   
                        <ItemDescription key={obj.id} item={obj} InsertToCart={this.props.InsertToCart} ></ItemDescription>
                    )
                }

            </div>
        )
    }
}

export default Items
