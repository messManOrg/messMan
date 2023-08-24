import { UserRole } from 'enums';
import { User } from 'store/auth/initialState';
import storage from './storage';

export default function Roles(...roles: `${UserRole}`[]) {
   if (typeof window === 'undefined') return false;

   const user = storage.get('auth')?.currentUser as User;

   if (!user) return false;

   return roles.includes(user.role as UserRole);
}
