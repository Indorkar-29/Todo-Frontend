import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import { ContextProvider } from './components/ContextApi/Context';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header';


const App = () => {
  const token=localStorage.getItem('token');
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/register' element={<SignUp/>} />
          <Route path='/todos' element={
            token ? (<Header/>) : (<Navigate replace to={"/"}/>)} />
            <Route path='*' element={<h1 style={{color:"red",textAlign:"center"}} >404 PAGE NOT FOUND !!!</h1>} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App;