import { useState } from 'react';
import Input from './Input';

const Project = () => {
    const [projectName, setProjectName] = useState('');
    const [shorDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    return (
        <div className="flex flex-col gap-4 text-gray-700">
            <Input
                placeholder="Project Name"
                value={projectName}
                onChange={setProjectName}
                className={'text-x font-semibold'}
            />
            <div className="flex flex-col gap-2">
                <Input
                    placeholder="Short Description"
                    value={shorDescription}
                    onChange={setShortDescription}
                />

                <Input
                    placeholder="Long Description"
                    value={longDescription}
                    onChange={setLongDescription}
                    className="ml-5"
                />
            </div>
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
                className="text-3xl font-bold text-gray-700 border-b-4"
            />
            <div className="flex flex-col gap-10">
                {Array(3)
                    .fill('')
                    .map(() => (
                        <Project />
                    ))}
            </div>
        </div>
    );
};

export default Projects;
