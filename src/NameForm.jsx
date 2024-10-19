import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Validate input fields
    if (firstName.trim() && lastName.trim()) {
      setFullName(`${firstName} ${lastName}`); // Set full name if both fields are filled
    } else {
      setFullName(''); // Clear full name if validation fails
    }
  };

return (
    <div style={{ margin: '20px' }}>
        <h1>Full Name Display</h1>
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
        {fullName && <h2 style={{ marginTop: '20px' }}>Full Name: {fullName}</h2>} {/* This is where full name will be displayed */}
    </div>
);

export default NameForm;
ReactDOM.render(<NameForm />, document.getElementById('root'));
