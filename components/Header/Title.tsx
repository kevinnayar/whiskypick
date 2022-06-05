import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { spacing } from '../../styles/theme';

const Title = () => {
  return (
    <Box sx={{ margin: `${spacing['8']} 0` }}>
      <Typography variant="h1">
        <Link href="/">whiskypick</Link>
      </Typography>
    </Box>
  );
};

export default Title;