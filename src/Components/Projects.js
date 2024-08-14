import { useState } from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';

const Project = ({ deleteProject, id }) => {
    const [projectName, setProjectName] = useState('');
    const [shorDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    return (
        <div className="flex flex-col gap-4 text-gray-700 relative">
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
            <button
                onClick={() => {
                    deleteProject(id);
                }}
                className="w-7 absolute top-0 right-0 opacity-0 group-hover:opacity-100"
            >
                x
            </button>
        </div>
    );
};

const Projects = () => {
    const [heading, setHeading] = useState('Projects');
    const [projects, setPrjects] = useState([uuidv4(), uuidv4(), uuidv4()]);

    const deleteProject = (key) => {
        const newProjects = projects.filter((project) => project !== key);
        setPrjects(newProjects);
    };

    const addProject = () => {
        const newProjects = [...projects, uuidv4()];
        setPrjects(newProjects);
    };

    return (
        <div className="p-9 group flex flex-col">
            <Input
                placeholder={'Projects'}
                onChange={setHeading}
                id="heading"
                className="text-3xl font-bold text-gray-700 border-b-4"
            />
            <div className="flex flex-col gap-10">
                {projects.map((id) => (
                    <Project key={id} id={id} deleteProject={deleteProject} />
                ))}
            </div>
            <button
                onClick={addProject}
                className="opacity-0 group-hover:opacity-100 transition-all border border-black self-center h-10 w-10 rounded-full"
            >
                +
            </button>
        </div>
    );
};

export default Projects;
