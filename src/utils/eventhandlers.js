import { v4 as uuidv4 } from 'uuid';

export function handleSkillInputKeyDown(
    e,
    id,
    skills,
    setSkills,
    inputToBeFocused
) {
    if (
        e.key == 'Backspace' &&
        e.target.textContent === '' &&
        skills.length > 1
    ) {
        setSkills(skills.filter((skill) => skill !== id));
        inputToBeFocused.current = {
            action: 'backspace',
            index: skills.indexOf(id) - 1,
        };
    }

    if (e.key !== 'Enter') return;
    e.preventDefault();

    const index = skills.indexOf(id);
    const newSkills = [...skills];
    newSkills.splice(index + 1, 0, uuidv4());
    setSkills(newSkills);

    inputToBeFocused.current = {
        action: 'enter',
        index: skills.indexOf(id) + 1,
    };
}
