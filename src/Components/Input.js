import { useEffect, useRef, useState } from 'react';
import './styles/Input.css';

const Input = ({
    placeholder,
    onKeyDown = () => null,
    onChange = () => null,
    className,
    id = null,
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        handlePlaceholder();
    });

    const handlePlaceholder = () => {
        if (inputRef.current.textContent.length <= 0) {
            inputRef.current.innerHTML = '';
        }
    };

    const handleKeyDown = (e) => {
        onKeyDown(e);
        handlePlaceholder();
    };
    return (
        <li className={'list-none ' + className}>
            <div
                ref={inputRef}
                contentEditable={true}
                spellCheck={false}
                data-placeholder={placeholder}
                onInput={(e) => {
                    onChange(e.target.textContent);
                }}
                className="focus:outline-none"
                onKeyDown={handleKeyDown}
                id={id}
            ></div>
        </li>
    );
};

export default Input;
