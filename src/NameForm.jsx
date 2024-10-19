import React, { useState } from 'react';
import './NameForm.css';  // For styling

const NameForm = () => {
  const [firstName, setFirstName] = useState('');  // For storing first name
  const [lastName, setLastName] = useState('');    // For storing last name
  const [fullName, setFullName] = useState('');    // For displaying full name after submission
  const [error, setError] = useState('');          // To display validation error message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form behavior

    // Validate input fields
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('Please fill in both first and last name.');
    } else {
      setError('');
      setFullName(`${firstName} ${lastName}`);  // Set full name
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

      {error && <p className="error">{error}</p>}  {/* Show error message if any */}
      
      {fullName && <h2>Full Name: {fullName}</h2>}  {/* Display full name after successful submission */}
    </div>
  );
};

export default NameForm;
