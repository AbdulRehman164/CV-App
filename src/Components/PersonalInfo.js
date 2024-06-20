import { useState } from 'react';
import Input from './Input';
import './styles/personalInfo.css';
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
                <Input
                    placeholder="+923012345678"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                />

                <Input
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={setEmail}
                />

                <Input
                    placeholder="linkdin.com/in/example"
                    value={linkdin}
                    onChange={setLinkdin}
                />

                <Input
                    placeholder="London, 221B Baker Street"
                    value={adress}
                    onChange={setAdress}
                />
            </ul>
            <div className="image"></div>
        </div>
    );
};

export default PersonalInfo;
