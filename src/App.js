import React from 'react';
import ReactDOM from 'react-dom';
import NameForm from './NameForm'; 

const App = () => {
    return (
        <div>
            <NameForm />
        </div>
    );
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
