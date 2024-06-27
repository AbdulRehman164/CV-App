import { useState } from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

const Project = () => {
    const [projectName, setProjectName] = useState('');
    const [shorDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    return (
        <div className="flex flex-col gap-4 text-gray-700">
            <Input
                placeholder="Project Name"
                onChange={setProjectName}
                className={'text-xl font-semibold'}
            />
            <div className="flex flex-col gap-2">
                <Input
                    placeholder="Short Description"
                    onChange={setShortDescription}
                />

                <Input
                    placeholder="Long Description"
                    onChange={setLongDescription}
                    className="ml-5"
                />
            </div>
        </div>
    );
};

const Projects = () => {
    const [heading, setHeading] = useState('Projects');
    const [projects, setPrjects] = useState([uuidv4(), uuidv4(), uuidv4()]);
    return (
        <div>
            <Input
                placeholder={'Projects'}
                onChange={setHeading}
                id="heading"
                className="text-3xl font-bold text-gray-700 border-b-4"
            />
            <div className="flex flex-col gap-10">
                {projects.map((id) => (
                    <Project key={id} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
