import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
   HomeRounded,
   FastfoodRounded,
   ShoppingBasketRounded,
   AccountCircleRounded,
} from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { RoutePaths } from 'enums/routes';

const BottomNavBar = () => {
   const routes = useLocation().pathname.split('/');
   const [value, setValue] = useState(() => routes[routes.length - 1]);

   function handleNavChange(event: unknown, newValue: string) {
      setValue(newValue);
   }

   return (
      <Paper
         elevation={2}
         sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
         <BottomNavigation showLabels value={value} onChange={handleNavChange}>
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
      value: RoutePaths.Profile,
      label: 'Profile',
      icon: <AccountCircleRounded />,
   },
];

export default BottomNavBar;
