import { useEffect, useRef, useState } from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

const EducationBlock = ({ id, deleteBlock }) => {
    const [degree, setDegree] = useState('');
    const [institute, setInsitute] = useState('');
    return (
        <div className="relative">
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
            <button
                onClick={() => {
                    deleteBlock(id);
                }}
                className="w-7 absolute top-0 right-0  opacity-0 group-hover:opacity-100"
            >
                x
            </button>
        </div>
    );
};

const Education = () => {
    const [heading, setHeading] = useState('Education');
    const [educationBlocks, setEducationBlocks] = useState([
        uuidv4(),
        uuidv4(),
    ]);

    const deleteBlock = (key) => {
        const newBlocks = educationBlocks.filter((block) => block != key);
        setEducationBlocks(newBlocks);
    };

    const addBlock = () => {
        const newBlocks = [...educationBlocks, uuidv4()];
        setEducationBlocks(newBlocks);
    };

    return (
        <div className="text-gray-700 relative flex flex-col group p-9">
            <Input
                placeholder="Education"
                value={heading}
                onChange={setHeading}
                className="text-3xl font-bold border-b-4"
            />
            <div className="flex flex-col gap-4">
                {educationBlocks.map((id) => (
                    <EducationBlock
                        key={id}
                        id={id}
                        deleteBlock={deleteBlock}
                    />
                ))}
            </div>
            <button
                onClick={addBlock}
                className="opacity-0 group-hover:opacity-100 transition-all border border-black self-center h-10 w-10 rounded-full"
            >
                +
            </button>
        </div>
    );
};

export default Education;
