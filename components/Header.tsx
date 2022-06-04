import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from './Nav';

const Title = () => (
  <Box sx={{ margin: '2rem 0' }}>
    <Typography variant="h1">
      <Link href="/">whiskypick</Link>
    </Typography>
  </Box>
);

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Title />
            <Nav />
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
}
