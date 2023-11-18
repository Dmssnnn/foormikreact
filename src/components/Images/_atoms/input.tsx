

import React from 'react';

interface InputProps {
  width: string;
  height: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur : (event: React.ChangeEvent<HTMLInputElement>) => void;
  name : string;
  id : string;
  value : string; 
  type : string;
  placeHolder : string; 
  className : string ; 
}
 
const Input: React.FC<InputProps> = ({ className ,  width, height, onChange, id, name, value , onBlur, type , placeHolder } ) => {
  return (
    <input
      style={{ width, height, marginTop: '10px' }} onChange={onChange} id={id} name={name} value = {value} onBlur = {onBlur} type = {type}  placeholder={placeHolder} className = {className}
    />
  );
}

export default Input;