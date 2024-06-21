import { useState } from 'react';
import Input from './Input';

const Skills = () => {
    const [heading, setHeading] = useState('skills');
    const [skills, setSkills] = useState([]);
    return (
        <div>
            <Input
                placeholder={'skills'}
                value={heading}
                onChange={setHeading}
            />
            <button
                onClick={() => {
                    setSkills([...skills, <Input />]);
                }}
            >
                Add
            </button>
            <ul>{skills}</ul>
        </div>
    );
};

export default Skills;
