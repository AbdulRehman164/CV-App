import { useState } from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

const EducationBlock = () => {
    const [degree, setDegree] = useState('');
    const [institute, setInsitute] = useState('');
    return (
        <div>
            <Input
                placeholder="Name of Degree"
                onChange={setDegree}
                className="text-xl font-medium"
            />
            <Input
                placeholder="Name of Institute"
                onChange={setInsitute}
                className="text-xl font-medium text-blue-500"
            />
        </div>
    );
};

const Education = () => {
    const [heading, setHeading] = useState('Education');
    const [educationBlocks, setEducationBlocks] = useState([
        uuidv4(),
        uuidv4(),
    ]);

    return (
        <div className="text-gray-700">
            <Input
                placeholder="Education"
                value={heading}
                onChange={setHeading}
                className="text-3xl font-bold border-b-4"
            />
            <div className="flex flex-col gap-4">
                {educationBlocks.map((id) => (
                    <EducationBlock key={id} />
                ))}
            </div>
        </div>
    );
};

export default Education;
