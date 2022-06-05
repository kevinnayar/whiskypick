import Stack from '@mui/material/Stack';
import { spacing } from '../../styles/theme';

const CardTextStack = ({ children }: { children: any }) => (
  <Stack sx={{ padding: `${spacing['3']} ${spacing['6']}` }}>
    {children}
  </Stack>
);

export default CardTextStack;