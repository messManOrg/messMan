import Layout from 'components/Layout';
import { Route, Routes } from 'react-router-dom';
import Bazar from 'views/Bazar';
import Home from 'views/Home';
import Meals from 'views/Meals';
import Members from 'views/Members';
import Notices from 'views/Notices';
import Profile from 'views/Profile';

export default function MainApp() {
   return (
      <Routes>
         <Route path='/app' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='bazar' element={<Bazar />} />
            <Route path='meals' element={<Meals />} />
            <Route path='notices' element={<Notices />} />
            <Route path='profile' element={<Profile />} />
            <Route path='members' element={<Members />} />
         </Route>
      </Routes>
   );
}
