import { useState } from 'react';
import Input from './Input';

const EducationBlock = () => {
    const [degree, setDegree] = useState('');
    const [institute, setInsitute] = useState('');
    return (
        <div>
            <Input
                placeholder="Name of Degree"
                value={degree}
                onChange={setDegree}
            />
            <Input
                placeholder="Name of Institute"
                value={institute}
                onChange={setInsitute}
            />
        </div>
    );
};

const Education = () => {
    const [heading, setHeading] = useState('Education');
    const [educationBlocks, setEducationBlocks] = useState([
        <EducationBlock />,
        <EducationBlock />,
    ]);

    return (
        <div>
            <Input
                placeholder="Education"
                value={heading}
                onChange={setHeading}
            />
            <button
                onClick={() => {
                    setEducationBlocks([
                        ...educationBlocks,
                        <EducationBlock />,
                    ]);
                }}
            >
                Add
            </button>
            {educationBlocks}
        </div>
    );
};

export default Education;
