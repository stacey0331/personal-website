import React from 'react';
const Experience = ({info}) => (
    <div class="experienceText">
        <strong>{info.title[0]}</strong>, {info.title[1]} -- {info.title[2]}
    
        <div class="experienceDate">
            {info.date}
        </div>
        {info.description.map((sentence, key) => (
            <div style={{textAlign: "left"}} key={key}>{sentence}</div>
        ))}
    </div>
);

export default Experience;