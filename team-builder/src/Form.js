import React, { useState } from 'react';

const teamMembers = [
    { personName: 'Emily', personEmail: 'emily@gmail.com', personRole: 'Designer'},
    { personName: 'Steven', personEmail: 'stevensteven@hey.com', personRole: 'Strategist'},
    { personName: 'John', personEmail: 'john@me.com', personRole: 'Engineer'},
    { personName: 'Sam', personEmail: 'sam@gmail.com', personRole: 'Operations'},
  ]
  
  const initialFormValues = { personName: '', personEmail: '', personRole: '' }

export default function Form() {
    
    const [team, setTeam] = useState(teamMembers);
    const [formValues, setFormValues] = useState(initialFormValues)
      
    const change = (event) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }
      
    const submit = (event) => {
        event.preventDefault()
        const newTeamMember = {
        personName: formValues.personName.trim(),
        personEmail: formValues.personEmail.trim(),
        personRole: formValues.personRole.trim(),
        }
        setTeam([...team, newTeamMember])
        setFormValues(initialFormValues)
    }        
      
    return (
        <div className='container'>
            <h1>Team Member App</h1>
            {team.map((person, idx) => {
                return (
                <div key={idx}>
                    {person.personName} is a {person.personRole} and their email is: {person.personEmail}
                </div>
                )
            })}
            <form onSubmit={submit}>
                <input
                    type='text'
                    name='personName'
                    onChange={change}
                    value={formValues.personName}
                />
                <input 
                    type='text' 
                    name='personEmail' 
                    onChange={change} 
                    value={formValues.personEmail}
                />
                <input 
                    type='text' 
                    name='personRole' 
                    onChange={change} 
                    value={formValues.personRole}
                />
                <button>Submit</button>
            </form>
        </div>
    )
};