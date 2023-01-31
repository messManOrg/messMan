import { Route, Routes } from 'react-router-dom';
import AuthLayout from 'components/Layout/Auth';
import MainLayout from 'components/Layout/Main';
import Bazar from 'views/Bazar';
import { ForgetPassword } from 'views/ForgetPassword';
import Home from 'views/Home';
import Login from 'views/Login';
import Meals from 'views/Meals';
import Members from 'views/Members';
import Notices from 'views/Notices';
import Profile from 'views/Profile';
import Register from 'views/Register';
import Base from 'views/Base';
import { Suspense } from 'react';
import OnBoardLayout from 'components/Layout/OnBoardLayout';
import CreateMess from 'views/Base/CreateMess';
import JoinMess from 'views/Base/JoinMess';

export default function AppRoutes() {
   return (
      <Routes>
         <Route path='/app' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='bazar' element={<Bazar />} />
            <Route path='meals' element={<Meals />} />
            <Route path='notices' element={<Notices />} />
            <Route path='profile' element={<Profile />} />
            <Route path='members' element={<Members />} />
         </Route>

         <Route path='/mass' element={<OnBoardLayout />}>
            <Route index element={<Base />} />
            <Route path='create' element={<CreateMess />} />
            <Route path='join' element={<JoinMess />} />
         </Route>

         <Route path='/' element={<AuthLayout />}>
            <Route
               path='login'
               element={
                  <Suspense fallback='...'>
                     <Login />
                  </Suspense>
               }
            />
            <Route
               path='register'
               element={
                  <Suspense fallback='...'>
                     <Register />
                  </Suspense>
               }
            />
            <Route
               path='forget-password'
               element={
                  <Suspense fallback='...'>
                     <ForgetPassword />
                  </Suspense>
               }
            />
         </Route>
      </Routes>
   );
}
