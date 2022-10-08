import React from 'react';
import Item  from '../Item/Item';

import "./itemList.css";

function ItemList(props) {
    return (
        <>
            <div className="flexContainer">
            { props.itemsList.map( (item) => {
                return (
                    <Item 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                        detail={item.detail}
                        stock={item.stock}
                    />
                );
            })}
            </div>
        </>
    );
}
  
  export default ItemList;