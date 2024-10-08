import React, { useState } from 'react';

// Input Component
const Input = ({ name, type, value, onChange, colour, label }) => {
  const focusBorderClass = `focus:border-${colour}`;
  const focusTextClass = `peer-focus:text-${colour}`;

  const inputElement =
    type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        required
        value={value}
        onChange={onChange}
        className={`peer w-full rounded-lg border-2 border-gray-300 bg-transparent p-2 text-base outline-none ${focusBorderClass}`}
      />
    ) : (
      <input
        name={name}
        id={name}
        type={type}
        required
        value={value}
        onChange={onChange}
        className={`peer w-full rounded-lg border-2 border-gray-300 bg-transparent p-2 text-base outline-none ${focusBorderClass}`}
      />
    );

  return (
    <div className="relative my-4 font-sans">
      {inputElement}
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-0 m-1 ml-2.5 transform bg-white p-1.5 text-base text-gray-500 transition-transform duration-300 ease-in-out ${focusTextClass} peer-focus:ml-5 peer-focus:-translate-y-[70%] peer-focus:scale-90 peer-focus:px-1 peer-focus:py-0 ${
          value ? "ml-5 translate-y-[-70%] scale-90 px-1 py-0" : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
};
export default Input

