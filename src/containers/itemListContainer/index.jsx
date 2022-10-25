import React from "react";
import './styles.css';

export default function ItemListContainer ({greeting}) {
    return (
        <div className='ItemListContainer'>
            <h2>{greeting}</h2>
        </div>
        
    )
}