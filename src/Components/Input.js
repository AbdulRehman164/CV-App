import { useState } from 'react';
import './styles/Input.css';

const Input = ({
    placeholder,
    onKeyDown = () => null,
    onChange = () => null,
    className,
    id = null,
}) => {
    return (
        <li className={'list-none ' + className}>
            <div
                contentEditable={true}
                spellCheck={false}
                data-placeholder={placeholder}
                onInput={(e) => {
                    onChange(e.target.textContent);
                }}
                className="focus:outline-none"
                onKeyDown={onKeyDown}
                id={id}
            ></div>
        </li>
    );
};

export default Input;
