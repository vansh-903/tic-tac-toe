import React from 'react';

const Square = (props) => {
    return(
        <div 
        onClick={props.onClick}
        style={{border: "2px solid", height: "100px", 
        width: "50%", display: "flex",
        justifyContent: "center", alignItems: "center" }} className='Square'>
        <h5>{props.value}</h5>
        </div>   
    );
};

export default Square;