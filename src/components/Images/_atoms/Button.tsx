import React from 'react';

interface ButtonProps {
  width: string;
  height: string;
  backgroundColor: string;
  value : string;
 
}

const Button: React.FC<ButtonProps> = ({ width, height, backgroundColor, value  }) => {
  return (
    <button style={{ width : width , height : height, backgroundColor : backgroundColor, marginTop: "30px" , marginBottom : "20px" }}  value={value} > {value} </button>
  );
};

export default Button;