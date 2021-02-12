import React, { useEffect, useState } from 'react';
import Sitebar from './home/Navbar';

function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  useEffect(() => { //2
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem(''));
    }
  }, [])

  const updateToken = (newToken) => { //3
    localStorage.setItem('token, newToken');
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  return (
    <div>
      <Sitebar />
    </div>
  );
}

export default App;
