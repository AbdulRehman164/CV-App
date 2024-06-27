import { useEffect, useRef, useState } from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';
import setCursorToEnd from '../utils/setCursorToEnd';
import { handleSkillInputKeyDown as handleKeyDown } from '../utils/eventhandlers';

const Skills = () => {
    const [heading, setHeading] = useState('skills');
    const [_, setSkillInput] = useState('');
    const [skills, setSkills] = useState([uuidv4()]);
    const inputToBeFocused = useRef({});

    // focus on the right input
    useEffect(() => {
        const { action, index } = inputToBeFocused.current;
        const input = document.getElementById(skills[index]);
        input?.focus();

        if (action === 'backspace') {
            setCursorToEnd(input);
        }
    }, [skills]);

    return (
        <div className="flex text-gray-700 flex-col gap-5">
            <Input
                placeholder={'skills'}
                value={heading}
                onChange={setHeading}
                className="text-3xl font-bold  border-b-4"
            />
            <ul className="flex gap-x-16 gap-y-5 flex-wrap">
                {skills.map((id) => (
                    <Input
                        id={id}
                        key={id}
                        placeholder="skill"
                        onChange={setSkillInput}
                        className="border-b-2 font-semibold"
                        onKeyDown={(e) =>
                            handleKeyDown(
                                e,
                                id,
                                skills,
                                setSkills,
                                inputToBeFocused
                            )
                        }
                    />
                ))}
            </ul>
        </div>
    );
};

export default Skills;
