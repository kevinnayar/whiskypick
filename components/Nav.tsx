import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const menu = [
  { title: 'Favorites', path: '/' },
  { title: 'Whiskies', path: '/whiskies' },
  { title: 'Users', path: '/users' },
];

export default function Nav() {
  const router = useRouter();
  return (
    <Box sx={{ marginLeft: 'auto' }}>
      {menu.map(({ title, path }) => (
        <Button key={title}>
          <a href={path} className={router.pathname === path ? 'active' : ''}>
            {title}
          </a>
        </Button>
      ))}
    </Box>
  );
}
