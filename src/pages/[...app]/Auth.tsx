import AuthLayout from 'components/AuthLayout';
import { Route, Routes } from 'react-router-dom';
import { ForgetPassword } from 'views/ForgetPassword';
import Login from 'views/Login';
import Register from 'views/Register';

export default function Auth() {
   return (
      <Routes>
         <Route path='/' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forget-password' element={<ForgetPassword />} />
         </Route>
      </Routes>
   );
}
