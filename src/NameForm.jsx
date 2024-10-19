import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`); 
    } else {
      setFullName(''); 
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Name Submission Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          style={{ margin: '10px 0', padding: '10px', width: '200px', display: 'block' }} 
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          style={{ margin: '10px 0', padding: '10px', width: '200px', display: 'block' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginTop: '10px' }}>
          Submit
        </button>
      </form>
      {fullName && <h2 style={{ marginTop: '20px' }}>Full Name: {fullName}</h2>}
    </div>
  );
};

export default NameForm;
