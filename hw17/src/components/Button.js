import React from "react";

export const Button = ({ handleClick, text, style }) => (
    <button onClick={handleClick} style={{backgroundColor: style}}>{text}</button>
);
