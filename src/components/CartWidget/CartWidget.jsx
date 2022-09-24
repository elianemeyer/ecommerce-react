import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./cart-widget.css";

function CartWidget() {
    return (
      <div className="CartWidget">
        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
      </div>
    );
  }
  
  export default CartWidget;