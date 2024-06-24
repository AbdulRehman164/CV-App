import './styles/Input.css';

const Input = ({ placeholder, value, onChange, className }) => {
    return (
        <li className={className + ' list-none'}>
            <div
                contentEditable={true}
                spellCheck={false}
                data-placeholder={placeholder}
                value={value}
                onInput={(e) => onChange(e.target.textContent)}
                className="focus:outline-none"
            ></div>
        </li>
    );
};

export default Input;
