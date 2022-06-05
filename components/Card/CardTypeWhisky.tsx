import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { WhiskyItem } from '../../types/baseTypes';
import CardLinkWrap from './CardLinkWrap';
import CardStars from './CardStars';
import CardTextStack from './CardTextStack';

type Props = {
  whisky: WhiskyItem,
  noLink?: boolean,
};

const CardTypeWhisky = ({ whisky, noLink }: Props) => {
  const { id, brand, name, rating } = whisky;
  return (
    <CardLinkWrap url={`/whiskies/${id}`} noLink={noLink}>
      <Image
        src={`/images/whiskies/${id}.jpg`}
        alt={`${brand} - ${name}`}
        width="400"
        height="400"
      />
      <CardTextStack>
        <Typography variant="h3">{brand}</Typography>
        <Typography variant="h4">{name}</Typography>
        <CardStars rating={rating} />
      </CardTextStack>
    </CardLinkWrap>
  );
};

export default CardTypeWhisky;

