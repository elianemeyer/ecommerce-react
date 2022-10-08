import React, { useState, useEffect} from 'react';
import "./itemListContainer.css";

import {getItems, getItemsByCategory} from '../../mockAPI/mockAPI';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {

  const [itemsList, setItemsList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getItems().then((data) => {
        setItemsList(data);
      })
    } else {
      getItemsByCategory(categoryID).then((data) => {
        setItemsList(data);
      });
    }
  }, [categoryID]);
    
    return (
      <div className="ItemListContainer">
          <h1 style={{textAlign: "center"}}>{props.title}</h1>
          <ItemList itemsList={itemsList} />
      </div>
    );
  }
  
  export default ItemListContainer;