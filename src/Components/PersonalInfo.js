import { useState } from 'react';
import './styles/personalInfo.css';

const Input = ({ placeholder, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

const PersonalInfo = () => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [linkdin, setLinkdin] = useState('');
    const [adress, setAdress] = useState('');
    return (
        <div>
            <Input placeholder="Name" value={name} onChange={setName} />
            <Input placeholder="Job Title" value={job} onChange={setJob} />
            <ul>
                <li>
                    <Input
                        placeholder="+923012345678"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                    />
                </li>
                <li>
                    <Input
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={setEmail}
                    />
                </li>
                <li>
                    <Input
                        placeholder="linkdin.com/in/example"
                        value={linkdin}
                        onChange={setLinkdin}
                    />
                </li>
                <li>
                    <Input
                        placeholder="London, 221B Baker Street"
                        value={adress}
                        onChange={setAdress}
                    />
                </li>
            </ul>
            <div className="image"></div>
        </div>
    );
};

export default PersonalInfo;
