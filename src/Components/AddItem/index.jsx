import React, { Component } from 'react';
import AddItemView from './view';

class Login extends Component {


    // Setting up state with default key and values
    state =  {
        "ItemName":'',
        "ItemQuantity":'',
        "saving": false,
        errors: {
            "isError" : false
        }
    }

    ItemNameChangeEvent = (event) => {
        var Itemvalue = event.target.value;
        this.setState({
            "ItemName": Itemvalue
        })
    }

    ItemQuantityChangeEvent = (event) => {
        var QuantityValue = event.target.value;
        this.setState({
            "ItemQuantity": QuantityValue
        })
    }

    validate = () => {
        var ItemName = this.state.ItemName;
        var ItemQuantity = this.state.ItemQuantity;
        var errors = {
            isError:false,
            ItemName:'',
            ItemQuantity:''
        }
        
        if(ItemName === ''){
            errors.isError = true;
            errors.ItemName = 'Item Name is blank';
        }

        if(ItemQuantity === ''){
            errors.isError = true;
            errors.ItemQuantity = 'Item Quantity is blank';
        } else if(ItemQuantity <= 0){
            errors.isError = true;
            errors.ItemQuantity = 'Item Quantity is invalid';
        }

        this.setState({
            "errors": errors
        })

        return errors.isError;
    }

    SaveItemAction = (event) => {
        event.preventDefault();
        console.log("Clicked On SAVE");
        var isError = this.validate();

        if(isError === false) {
            console.log("Call Backend to save item")
        } else {
            console.log("Show error message to view");
        }
    }

    cancelAction = (event) => {
        console.log("Clicked On Cancel")
    }


    render() {
        return (
            <div className="AddItem">
                <AddItemView ItemProps={this.state} actions={{
                    SaveItemAction:this.SaveItemAction,
                    cancelAction:this.cancelAction,
                    ItemNameChangeEvent:this.ItemNameChangeEvent,
                    ItemQuantityChangeEvent:this.ItemQuantityChangeEvent,
                }}/>
            </div>
        );
    }
}

export default Login;
