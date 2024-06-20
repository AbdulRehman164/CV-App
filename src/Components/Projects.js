import { useState } from 'react';
import Input from './Input';

const Project = () => {
    const [projectName, setProjectName] = useState('');
    const [shorDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    return (
        <div>
            <ul>
                <Input
                    placeholder="Project Name"
                    value={projectName}
                    onChange={setProjectName}
                />
                <Input
                    placeholder="Short Description"
                    value={shorDescription}
                    onChange={setShortDescription}
                />
                <Input
                    placeholder="Long Description"
                    value={longDescription}
                    onChange={setLongDescription}
                />
            </ul>
        </div>
    );
};

const Projects = () => {
    const [heading, setHeading] = useState('Projects');
    return (
        <div>
            <Input
                placeholder={'Projects'}
                value={heading}
                onChange={setHeading}
                id="heading"
            />
            {Array(3)
                .fill('')
                .map(() => (
                    <Project />
                ))}
        </div>
    );
};

export default Projects;
