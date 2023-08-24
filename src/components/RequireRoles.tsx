import { UserRole } from 'enums';
import Roles from 'utils/roles';

interface Props {
   roles: `${UserRole}`;
   children: JSX.Element;
}

export default function RequireRoles(props: Props) {
   if (Roles(props.roles)) {
      return props.children;
   }

   return null;
}
