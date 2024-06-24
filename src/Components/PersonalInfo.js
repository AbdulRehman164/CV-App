import { useState } from 'react';
import Input from './Input';
import phoneSvg from '../Assets/phone.svg';
import emailSvg from '../Assets/email.svg';
import linkSvg from '../Assets/link.svg';
import addressSvg from '../Assets/address.svg';

const PersonalInfo = () => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [linkdin, setLinkdin] = useState('');
    const [adress, setAdress] = useState('');

    const svgStyle = 'opacity-50 h-4 w-4';
    return (
        <div className="grid  grid-cols-custom-cols">
            <div>
                <Input
                    placeholder="Name"
                    value={name}
                    onChange={setName}
                    className="text-4xl font-bold text-gray-700"
                />
                <Input
                    placeholder="Job Title"
                    value={job}
                    onChange={setJob}
                    className="text-xl text-blue-500 font-medium"
                />
            </div>

            <ul className="flex flex-wrap gap-2 col-span-1 row-start-2 self-baseline">
                <div className="flex items-center gap-1">
                    <img src={phoneSvg} className={svgStyle} />
                    <Input
                        placeholder="Phone"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        className="text-gray-700"
                    />
                </div>
                <div className="flex items-center gap-1">
                    <img src={emailSvg} className={svgStyle} />
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={setEmail}
                    />
                </div>
                <div className="flex items-center gap-1">
                    <img src={linkSvg} className={svgStyle} />

                    <Input
                        placeholder="linkdin"
                        value={linkdin}
                        onChange={setLinkdin}
                    />
                </div>
                <div className="flex items-center gap-1">
                    <img src={addressSvg} className={svgStyle} />

                    <Input
                        placeholder="Adress"
                        value={adress}
                        onChange={setAdress}
                    />
                </div>
            </ul>
            <div className="bg-gray-500 h-32 w-32 row-span-2 col-start-2 justify-self-end"></div>
        </div>
    );
};

export default PersonalInfo;
