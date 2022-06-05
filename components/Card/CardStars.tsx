import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { colors, spacing } from '../../styles/theme';

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

export default CardStars;

