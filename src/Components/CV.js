import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';

const CV = () => {
    return (
        <div className="mx-44 my-2 shadow-xl flex flex-col gap-y-14 w-[960px]">
            <PersonalInfo />
            <Projects />
            <Skills />
            <Education />
        </div>
    );
};

export default CV;
