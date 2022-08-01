import React from "react";

const Square = ({ value, onCLick }) => {
    const style = value ? 'squares ${value}' : 'squares';
    return (
        <button onClick={onClick}>
            {value}
        </button>
    )
}

export default Square;