import React from "react";
import "./TypeBox.scss";
import Button from '@mui/material/Button';
import { Questions } from '../../QuestionTemplate';

const TypeBox = () => {
    const toPascalCaseWithSpaces = (str) => {
        return str
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (match) => match.toUpperCase())
            .trim();
    };

    return (
        <div className='outer-box'>
            {Object.keys(Questions).map(category => (
                <div key={category} className="quiz-box">
                    <span className="title">{toPascalCaseWithSpaces(category)}</span>
                    <Button className="button" variant="contained">Start</Button>
                </div>
            ))}
        </div>
    );
};

export default TypeBox;