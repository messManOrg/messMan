import { Link as RouterLink } from 'react-router-dom';
import type { LinkProps as RouterLinkProps } from 'react-router-dom';
import MuiLink, { LinkProps } from '@mui/material/Link';

type Props = LinkProps & RouterLinkProps;

export default function Link(props: Props) {
   return <MuiLink component={RouterLink} {...props} />;
}
