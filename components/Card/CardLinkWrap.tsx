import Box from '@mui/material/Box';

type Props = {
  url: string,
  noLink?: boolean,
  children: any,
};

const CardLinkWrap = ({ url, noLink, children }: Props) => noLink
  ? <Box>{children}</Box>
  : <a href={url}><>{children}</></a>
;

export default CardLinkWrap;

