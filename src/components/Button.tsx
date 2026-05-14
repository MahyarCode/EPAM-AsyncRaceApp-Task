import React from 'react';
import type { ButtonType } from '../types/buttonType';

const Button: React.FC<ButtonType> = function Button({ colorName, text }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: colorName }}
      className="p-1 rounded font-indie"
    >
      {text}
    </button>
  );
};

export default Button;
