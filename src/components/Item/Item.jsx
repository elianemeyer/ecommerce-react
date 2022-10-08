import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import "./item.css";

function Item(props) {
    return (
        <div className="card item" id={props.id}>
            <div className="item-image-container">
                <img src={props.image} className="item-image card-img-top" alt={props.name}/>
            </div>
            <div className="card-body text-center">    
                <h5 className="item-name"><strong>{props.name}</strong></h5>

                <p className="small item-description">
                {props.description}
                </p>
                <h4 className="item-price">
                    €{props.price}              
                </h4>
                   <Link to={`/item/${props.id}`}>
                        <Button text="See More" />
                   </Link>
            </div>
        </div>
    );
}
  
export default Item;
