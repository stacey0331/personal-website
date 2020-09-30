import React from 'react';
const Experience = ({info}) => (
    <div class="expText">
        <div class="experienceText">
            <strong>{info.title[0]}</strong>, {info.title[1]} -- {info.title[2]}
        </div>
        <div class="experienceDate">
            {info.date}
        </div>
        {info.description.map((sentence, key) => (
            <div class="experienceText" key={key}>{sentence}</div>
        ))}
    </div>
);

export default Experience;