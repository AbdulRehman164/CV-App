const Input = ({ placeholder, value, onChange }) => {
    return (
        <li>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </li>
    );
};

export default Input;
