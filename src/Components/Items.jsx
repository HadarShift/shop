import React, { Component } from 'react'
import itemDescription from './itemDescription'

export class Items extends Component {
    render() {
        console.log("hey")
        // console.log(this.props.itemList)                   

        return (
            <div>
                {
                    this.props.itemList.map((obj) =>   
                        <itemDescription key={obj.id} item={obj} ></itemDescription>
                    )
                }

            </div>
        )
    }
}

export default Items
