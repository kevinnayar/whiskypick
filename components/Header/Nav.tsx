import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const menu = [
  { title: 'Favorites', path: '/' },
  { title: 'Whiskies', path: '/whiskies' },
  { title: 'Users', path: '/users' },
];

const Nav = () => {
  const { pathname } = useRouter();
  return (
    <Box sx={{ marginLeft: 'auto' }}>
      {menu.map(({ title, path }) => (
        <Button key={title} disabled={pathname === path}>
          <a href={path}>
            {title}
          </a>
        </Button>
      ))}
    </Box>
  );
}

export default Nav;

