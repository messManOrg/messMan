import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Bazar from './pages/Bazar';
import Meals from './pages/Meals';
import Notices from './pages/Notices';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import { ForgetPassword } from './pages/ForgetPassword';
import Members from './pages/Members';

function App() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='bazar' element={<Bazar />} />
         <Route path='meals' element={<Meals />} />
         <Route path='notices' element={<Notices />} />
         <Route path='profile' element={<Profile />} />
         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />} />
         <Route path='forget-password' element={<ForgetPassword />} />
         <Route path='members' element={<Members />} />
      </Routes>
   );
}

export default App;
