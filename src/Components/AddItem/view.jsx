import React, { Component } from 'react';
import './addItem.css';
class AddItemView extends Component {

  render() {
      let ItemProps = this.props.ItemProps;
      let actions = this.props.actions;
      let ItemNameError = '';
      if(ItemProps.errors.isError === true && ItemProps.errors.ItemName !== ''){
          ItemNameError = (<font color="red">{ItemProps.errors.ItemName}</font>);
      }
      let ItemQuantityError = '';
      if(ItemProps.errors.isError === true && ItemProps.errors.ItemQuantity !== ''){
          ItemQuantityError = (<font color="red">{ItemProps.errors.ItemQuantity}</font>);
      }
      
    return (
      <div className="add-item-wrapper">
        AddItemPAGE
        <input type="text" name="user" placeholder="Item Name" value={ItemProps.ItemName} onChange={actions.ItemNameChangeEvent}/>
        {ItemNameError}
        <input type="number" name="user" placeholder="Quantity" value={ItemProps.ItemQuantity} onChange={actions.ItemQuantityChangeEvent}/>
        {ItemQuantityError}
        <button className="login loginmodal-submit" onClick={actions.SaveItemAction}> Save </button>
        <button className="login loginmodal-submit" style={{marginLeft:'10px'}} onClick={actions.cancelAction}> Cancel </button>
      </div>
    );
  }
}

export default AddItemView;
