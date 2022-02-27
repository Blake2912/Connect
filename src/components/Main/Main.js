import { Routes, Route } from 'react-router-dom'

import { HomePage } from "../../pages/homepage/hompage"
import { LandingPage } from '../../pages/landingpage/landing';
import { LoginPage } from "../../pages/login/login"
import { RegisterPage } from '../../pages/register/register';



export const Main = () => (
    <Routes>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='' element={<LandingPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
    </Routes>
  );