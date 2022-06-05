import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { spacing } from '../styles/theme';

const NotFound = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2">
        404
      </Typography>
      <Box sx={{ marginBottom: spacing['10'] }}>
        <Typography variant="h4">
          This page could not be found
        </Typography>
      </Box>
      <Box>
        <Button variant="outlined" color="primary" href="/">Go back home</Button>
      </Box>
    </Box>
  );
}

export default NotFound;
