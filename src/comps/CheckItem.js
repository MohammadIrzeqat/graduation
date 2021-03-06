import React from 'react';
import {FaTrash} from 'react-icons/fa';
import axios from 'axios';

function CheckItem({order}){

    const handleDelete = ()=>{
        axios.delete("http://localhost:4000/orders/" + order._id).then(res=>{
        }).catch(err=>{
            console.log("Not correct");
        })
    }

    return(
        <div className="check-item">
            <div className="item-name">{order.itemName}</div>
            <div className="item-price">{order.itemPrice}</div>
            <div>{order._id}</div>
            <div className="item-delete"><FaTrash onClick={handleDelete}/></div>
        </div>  
    );
}

export default CheckItem;