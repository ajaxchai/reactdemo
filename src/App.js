import React from 'react';
import './App.css';

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
};

const user = {
	firstName: 'zheng',
	lastName: 'chai'
};

function btnClicked() {
	alert("Clicked");
};

function App() {
  return (
    <div className="App">
      <div className="App-header">
           Hello, React your name is {formatName(user)}!
      </div>
      <button onClick={btnClicked} className="btn"> 
	Click Me 
      </button>
    </div>
  );
}

export default App;
