import Image from 'next/image';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { WhiskyItem, User } from '../types/baseTypes';

const CardStars = ({ rating }: { rating: number }) => {
  const five = [0, 1, 2, 3, 4];
  const bgWidth = 160;
  const fgWidth = (rating / 5) * bgWidth;

  return (
    <div className="card-stars">
      <div className="card-stars__bg" style={{ width: `${bgWidth}px` }}>
        {five.map((l) => (
          <i key={l} className={`material-icons card-stars__icon`}>
            star
          </i>
        ))}
      </div>
      <div className="card-stars__fg" style={{ width: `${fgWidth}px` }}>
        {five.map((l) => (
          <i key={l} className={`material-icons card-stars__icon`}>
            star
          </i>
        ))}
      </div>
      <p className="card-stars__text">
        <span>{rating.toFixed(2)}</span> stars
      </p>
    </div>
  );
};

type CProps = {
  url: string,
  noLink?: boolean,
  children: any,
};

const CardWrapper = ({ url, noLink, children }: CProps) => {
  return noLink ? <>{children}</> : <Link href={url}><>{children}</></Link>
};

type WProps = {
  whisky: WhiskyItem,
  noLink?: boolean,
};

const WhiskyCard = ({ whisky, noLink }: WProps) => {
  const { id, brand, name, rating, type, age, price } = whisky;
  return (
    <CardWrapper url={`/whiskies/${id}`} noLink={noLink}>
      <Image
        className="card__img"
        src={`/images/whiskies/${id}.jpg`}
        alt={`${brand} - ${name}`}
        width="400"
        height="400"
      />
      <div className="card__content">
        <Typography variant="h3">{brand}</Typography>
        <Typography variant="h4">{name}</Typography>
        <CardStars rating={rating} />
        <div className="card__meta">
          <p>Type: {type}</p>
          <p>Age: {age}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    </CardWrapper>
  );
};

type UProps = {
  user: User,
  noLink?: boolean,
};

const UserCard = ({ user, noLink }: UProps) => {
  const { id, name, total } = user;
  
  return (
    <CardWrapper url={`/users/${id}`} noLink={noLink}>
      <Image
        className="card__img"
        src={`/images/users/${id}.jpg`}
        alt={name}
        width="400"
        height="400"
      />
      <div className="card__content">
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h4">Rated {total} {total === 1 ? 'whisky' : 'whiskies'}</Typography>
      </div>
    </CardWrapper>
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

export default function Card({ type, item, noLink }: CardProps) {
  return (
    <Grid item sx={{ width: '25%' }}>
      {type === 'whisky' && <WhiskyCard whisky={item} noLink={noLink} />}
      {type === 'user' && <UserCard user={item} noLink={noLink} />}
    </Grid>
  );
}
