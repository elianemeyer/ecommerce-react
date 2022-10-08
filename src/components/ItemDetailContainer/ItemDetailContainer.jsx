import React, { useState, useEffect} from 'react';

import { getItem } from '../../mockAPI/mockAPI';
import  ItemDetail  from './ItemDetail';

import "./itemDetailContainer.css";

import { useParams } from 'react-router-dom';

function ItemDetailContainer(props) {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getItem(id).then((data) => {
            setItem(data);
        });
    }, [id]);

    return (
        <ItemDetail 
        name={item.name}
        img={item.img}
        price={item.price}
        detail={item.detail}
        stock={item.stock}
        />
    );
}
  
  export default ItemDetailContainer;