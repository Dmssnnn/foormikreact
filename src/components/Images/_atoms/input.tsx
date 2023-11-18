

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
}

const Input: React.FC<InputProps> = ({ width, height, onChange, id, name, value , onBlur, type } ) => {
  return (
    <input
      style={{ width, height, marginTop: '10px' }} onChange={onChange} id={id} name={name} value = {value} onBlur = {onBlur} type = {type}
    />
  );
}

export default Input;