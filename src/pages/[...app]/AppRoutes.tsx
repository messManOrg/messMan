import { Route, Routes } from 'react-router-dom';
import AuthLayout from 'components/Layout/Auth';
import MainLayout from 'components/Layout/Main';
import OnBoardLayout from 'components/Layout/OnBoardLayout';
import RequireAuth from 'components/RequireAuth';
import Bazar from 'views/Bazar';
import AddBazar from 'views/Bazar/AddBazar';
import AllUserCost from 'views/Cost/AllUserCost';
import SpecificUserCost from 'views/Cost/SpecificUserCost';
import { ForgetPassword } from 'views/ForgetPassword';
import Home from 'views/Home';
import Hostel from 'views/Hostel';
import Login from 'views/Login';
import Meals from 'views/Meals';
import Members from 'views/Members';
import AddUser from 'views/Members/addUser';
import Notices from 'views/Notices';
import AddNotice from 'views/Notices/AddNotice';
import OnBoard from 'views/OnBoard';
import CreateMess from 'views/OnBoard/CreateMess';
import JoinMess from 'views/OnBoard/JoinMess';
import Profile from 'views/Profile';
import Register from 'views/Register';

export default function AppRoutes() {
   return (
      <Routes>
         <Route path='/' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forget-password' element={<ForgetPassword />} />
         </Route>

         <Route
            path='/app'
            element={
               <RequireAuth>
                  <MainLayout />
               </RequireAuth>
            }
         >
            <Route index element={<Home />} />
            <Route path='specific-cost' element={<SpecificUserCost />} />
            <Route path='all-cost' element={<AllUserCost />} />
            <Route path='bazar' element={<Bazar />} />
            <Route path='add-bazar-list' element={<AddBazar />} />
            <Route path='meals' element={<Meals />} />
            <Route path='notices' element={<Notices />} />
            <Route path='add-notice' element={<AddNotice />} />
            <Route path='profile' element={<Profile />} />
            <Route path='members' element={<Members />} />
            <Route path='add-user' element={<AddUser />} />
         </Route>

         <Route
            path='/onboard'
            element={
               <RequireAuth>
                  <OnBoardLayout />
               </RequireAuth>
            }
         >
            <Route index element={<OnBoard />} />
            <Route path='create' element={<CreateMess />} />
            <Route path='join' element={<JoinMess />} />
            <Route path=':hostel' element={<Hostel />} />
         </Route>
      </Routes>
   );
}
