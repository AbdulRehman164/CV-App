import PersonalInfo from './PersonalInfo';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';

const CV = () => {
    return (
        <div>
            <PersonalInfo />
            <Projects />
            <Skills />
            <Education />
        </div>
    );
};

export default CV;
