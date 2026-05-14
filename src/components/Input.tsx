import React from 'react';
import { useForm } from 'react-hook-form';
import type { InputType } from '../types/input';
import Button from './Button';

const Input: React.FC<InputType> = function ({ placeholder }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input
        {...register('carName')}
        className="rounded-xl p-1 w-40 mr-6 border-2 border-blue-300"
        placeholder={placeholder}
      />

      <input
        {...register('color')}
        type="color"
        className="w-5 h-5 mr-6 border-2 border-blue-300"
      />

      <Button colorName="#ADD8E6" text="Submit" />
    </form>
  );
};

export default Input;
