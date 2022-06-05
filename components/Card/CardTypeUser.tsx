import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { User } from '../../types/baseTypes';
import CardLinkWrap from './CardLinkWrap';
import CardTextStack from './CardTextStack';

type Props = {
  user: User,
  noLink?: boolean,
};

const CardTypeUser = ({ user, noLink }: Props) => {
  const { id, name, total } = user;
  return (
    <CardLinkWrap url={`/users/${id}`} noLink={noLink}>
      <Image
        src={`/images/users/${id}.jpg`}
        alt={name}
        width="400"
        height="400"
      />
      <CardTextStack>
        <Typography variant="h3">{name}</Typography>
        <p>Rated {total} {total === 1 ? 'whisky' : 'whiskies'}</p>
      </CardTextStack>
    </CardLinkWrap>
  );
};

export default CardTypeUser;

