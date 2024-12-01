import React from "react";

const INITIAL_VALUES = {
    TYPE: 'number',
    PLACEHOLDER: 'Введите значение'
}

export const Input = ({ value, setValue, placeholder }) => (
    <input
        type={INITIAL_VALUES.TYPE}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder ? placeholder : INITIAL_VALUES.PLACEHOLDER}
    />
)