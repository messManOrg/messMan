import { Button, Stack, Switch, ButtonProps, SwitchProps } from '@mui/material';

interface Props extends ButtonProps {
   checked: SwitchProps['checked'];
}

const SwitchButton: React.FC<Props> = props => {
   const { checked, children, ...buttonProps } = props;

   return (
      <Button fullWidth variant='contained' {...buttonProps}>
         <Stack
            direction='row'
            width='100%'
            justifyContent='space-between'
            alignItems='center'
         >
            {children}
            <Switch color='default' disableRipple checked={checked} />
         </Stack>
      </Button>
   );
};

export default SwitchButton;
