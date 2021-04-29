import React from 'react';

export default function MenuItems(props){
    return (<div className="menu-items">
    <div className='content'>
    <h1 className="title">
    {props.item}
    </h1>
    <span className="subtitle">Shop Now</span>
    </div>
    </div>)
}