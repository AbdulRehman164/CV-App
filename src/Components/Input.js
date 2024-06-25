import './styles/Input.css';

const Input = ({ placeholder, value, onChange, className }) => {
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
            ></div>
        </li>
    );
};

export default Input;
