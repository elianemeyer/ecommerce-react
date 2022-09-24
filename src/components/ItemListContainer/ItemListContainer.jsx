import React from 'react';

import "./ItemListContainer.css";

function ItemListContainer(props) {
    return (
      <div className="ItemListContainer">
          <h1 style={{textAlign: "center"}}>{props.greeting}</h1>
      </div>
    );
  }
  
  export default ItemListContainer;