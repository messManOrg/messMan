import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
   HomeRounded,
   FastfoodRounded,
   ShoppingBasketRounded,
   NotificationsRounded,
   AccountCircleRounded,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { RoutePaths } from 'enums/routes';

const BottomNavBar = () => {
   const [value, setValue] = useState(window.location.pathname);

   function handleNavChange(event: unknown, newValue: string) {
      setValue(newValue);
   }

   return (
      <Paper
         elevation={2}
         sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
         }}
      >
         <BottomNavigation value={value} onChange={handleNavChange}>
            {navs.map(navItem => (
               <BottomNavigationAction
                  key={navItem.value}
                  component={Link}
                  to={navItem.value}
                  value={navItem.value}
                  icon={navItem.icon}
                  label={navItem.label}
               />
            ))}
         </BottomNavigation>
      </Paper>
   );
};

const navs = [
   {
      value: RoutePaths.Home,
      label: 'Home',
      icon: <HomeRounded />,
   },
   {
      value: RoutePaths.Bazar,
      label: 'Bazar',
      icon: <ShoppingBasketRounded />,
   },
   {
      value: RoutePaths.Meals,
      label: 'Meals',
      icon: <FastfoodRounded />,
   },
   {
      value: RoutePaths.Notices,
      label: 'Notices',
      icon: <NotificationsRounded />,
   },
   {
      value: RoutePaths.Profile,
      label: 'Profile',
      icon: <AccountCircleRounded />,
   },
];

export default BottomNavBar;
