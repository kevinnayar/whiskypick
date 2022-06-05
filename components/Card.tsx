import Image from 'next/image';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { colors, spacing } from '../styles/theme';
import { WhiskyItem, User } from '../types/baseTypes';

const CardStars = ({ rating }: { rating: number }) => {
  const five = Array.from(Array(5)).map((_, i) => i);

  const width = 160;
  const height = width / 5;
  const starContainerWidth = (rating / 5) * width;
  const starPadding = 4;
  const starSize = height - starPadding;

  const containerStyles = {
    width,
    margin: `${spacing[4]} auto`,
    paddingTop: `${height}px`,
    position: 'relative',
  };
  const starContainerStyles = {
    top: 0,
    width,
    height,
    position: 'absolute',
    overflow: 'hidden',
  };
  const starStyles = {
    width: starSize,
    height: starSize,
    fontSize: starSize,
    padding: starPadding / 2,
    display: 'inline',
  };

  return (
    <Tooltip title={`${rating.toFixed(2)} stars`}>
      <Box sx={containerStyles}>
        <Box sx={starContainerStyles}>
          {five.map((l) => (
            <i key={l} className="material-icons" style={{ ...starStyles, color: `${colors.grey}` }}>
              star
            </i>
          ))}
        </Box>
        <Box sx={{ ...starContainerStyles, width: `${starContainerWidth}px`, color: `${colors.primary}` }}>
          {five.map((l) => (
            <i key={l} className="material-icons" style={starStyles}>
              star
            </i>
          ))}
        </Box>
      </Box>
    </Tooltip>
  );
};

type WithKids = {
  children: any,
};

type CProps = WithKids & {
  url: string,
  noLink?: boolean,
};

const CardContainer = ({ url, noLink, children }: CProps) => noLink
  ? <Box>{children}</Box>
  : <a href={url}><>{children}</></a>
;

const CardTextContent = ({ children }: WithKids) => (
  <Stack sx={{ padding: `${spacing['3']} ${spacing['6']}` }}>
    {children}
  </Stack>
);


type WProps = {
  whisky: WhiskyItem,
  noLink?: boolean,
};

const WhiskyCard = ({ whisky, noLink }: WProps) => {
  const { id, brand, name, rating, /* type, age, price */ } = whisky;
  return (
    <CardContainer url={`/whiskies/${id}`} noLink={noLink}>
      <Image
        src={`/images/whiskies/${id}.jpg`}
        alt={`${brand} - ${name}`}
        width="400"
        height="400"
      />
      <CardTextContent>
        <Typography variant="h3">{brand}</Typography>
        <Typography variant="h4">{name}</Typography>
        <CardStars rating={rating} />
      </CardTextContent>
    </CardContainer>
  );
};

type UProps = {
  user: User,
  noLink?: boolean,
};

const UserCard = ({ user, noLink }: UProps) => {
  const { id, name, total } = user;
  return (
    <CardContainer url={`/users/${id}`} noLink={noLink}>
      <Image
        src={`/images/users/${id}.jpg`}
        alt={name}
        width="400"
        height="400"
      />
      <CardTextContent>
        <Typography variant="h3">{name}</Typography>
        <p>Rated {total} {total === 1 ? 'whisky' : 'whiskies'}</p>
      </CardTextContent>
    </CardContainer>
  );
};

type CardProps = 
| {
  type: 'whisky',
  item: WhiskyItem,
  noLink?: boolean,
}
| {
  type: 'user',
  item: User,
  noLink?: boolean,
};

const CustomCard = ({ type, item, noLink }: CardProps) => (
  <Grid item sx={{ width: '25%' }}>
    {type === 'whisky' && (
      <Card raised={false}>
        <WhiskyCard whisky={item} noLink={noLink} />
      </Card>
    )}
    {type === 'user' && (
      <Card raised={false}>
        <UserCard user={item} noLink={noLink} />
      </Card>
    )}
  </Grid>
);

export default CustomCard;

