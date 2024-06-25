import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';

const CV = () => {
    return (
        <div className="p-9 mx-44 my-2 border border-solid border-black flex flex-col gap-y-14">
            <PersonalInfo />
            <Projects />
            <Skills />
            <Education />
        </div>
    );
};

export default CV;
