import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Nav from './Nav';
import { spacing } from '../styles/theme';

const Title = () => {
  return (
    <Box sx={{ margin: `${spacing['8']} 0` }}>
      <Typography variant="h1">
        <Link href="/">whiskypick</Link>
      </Typography>
    </Box>
  );
}

const Wrapper = ({ children }: { children: any }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {children}
        </Box>
      </Container>
    </AppBar>
  </Box>
);

const Header = () => {
  return (
    <Wrapper>
      <Title />
      <Nav />
    </Wrapper>
  );
}

export default Header;