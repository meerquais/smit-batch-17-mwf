import React from 'react'

function Skills({skills}) {
  return (
    <div>
        <ul>
            {skills.map((skill)=>(
                <li key={skill}>{skill}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default Skills
