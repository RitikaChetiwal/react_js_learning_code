import React from "react";

const Button = ({ handleClick, children }) => {
    console.log(`Rendering, ${children}`);
    return (
      <div>
        <button onClick={handleClick}>
            {children}
        </button>
        
      </div>
    );
  };
  
  export default React.memo(Button);
  