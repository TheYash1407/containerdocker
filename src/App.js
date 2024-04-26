import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { DataProvider } from './context/dataContext';
import LoginButton from './login';
import LogoutButton from './logout';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  let {user}=useAuth0();
  console.log(user);
  return <>
    {user ?<DataProvider>
      <div style={{display:'flex',flexDirection:'row-reverse'}}><LogoutButton></LogoutButton></div>
      {/* Welcome Page */}
      <Start/>

      {/* Quiz Page */}
      <Quiz/>

      {/* Result Page */}
      <Result/>

    </DataProvider>:<LoginButton></LoginButton>}
  </>
}

export default App;
