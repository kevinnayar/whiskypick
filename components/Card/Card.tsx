import MuiCard from '@mui/material/Card';
import { colors } from '../../styles/theme';
import { WhiskyItem, User } from '../../types/baseTypes';
import CardTypeWhisky from './CardTypeWhisky';
import CardTypeUser from './CardTypeUser';

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

const Card = ({ type, item, noLink }: CardProps) => {
  const sx = !noLink
    ? {
      '&:hover': {
        boxShadow: '0 0 10px rgba(100, 100, 100, 0.3)',
        border: `2px solid ${colors.primary}`,
      },
    } : undefined;

  return (
    <MuiCard raised={false} sx={sx}>
      {type === 'whisky'
        ? <CardTypeWhisky whisky={item} noLink={noLink} />
        : <CardTypeUser user={item} noLink={noLink} />}
    </MuiCard>
  );
}

export default Card;

