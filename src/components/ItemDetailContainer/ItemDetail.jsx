import React from 'react';
import Button  from '../Button/Button';
import ItemCounter from '../ItemCounter/ItemCounter';

function ItemDetail(props) {
    return (
        <div className="card ItemDetail" id={props.id}>
            <div className="ItemDetail-image-container">
                <img src={props.image} className="ItemDetail-image card-img-top" alt={props.name}/>
            </div>
            <div className="card-body text-center">    
                <h5 className="ItemDetail-name"><strong>{props.name}</strong></h5>

                <p className="small ItemDetail-description">
                {props.description}
                </p>
                <h4 className="ItemDetail-price">
                    €{props.price}              
                </h4>
                <ItemCounter initial="1" stock={props.stock}  /> 
                <Button text="Add to cart" /> 
            </div>
        </div>
    );
  }
  
  export default ItemDetail;
