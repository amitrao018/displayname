import React, { useState } from 'react';
import './NameForm.css';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('Please fill in both first and last name.');
      setFullName('');
    } else {
      setError(''); 
      setFullName(`${firstName} ${lastName}`); 
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder="Enter first name" 
          />
        </label>
        <label>
          Last Name:
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Enter last name" 
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {error && <p className="error">{error}</p>} 
      
      {fullName && <h2>Full Name: {fullName}</h2>}  
    </div>
  );
};

export default NameForm;

