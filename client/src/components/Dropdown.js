import React from "react";
  
const Dropdown = ({ items }) => {
    return (
        <div>
           <select>
                {items &&
                    items.map((item) => (
                    <option>{item}</option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;