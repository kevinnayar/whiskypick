import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { colors, spacing } from '../../styles/theme';
import { Ratings } from '../../types/baseTypes';
import { getUserNameById } from '../../utils/baseUtils';

const Chart = ({ ratings }: { ratings: Ratings }) => {
  const ratingsTuples = Object.entries(ratings);
  const width = 100 / ratingsTuples.length;
  const totalHeight = 600;

  return (
    <Card raised={false} sx={{ height: totalHeight, display: 'flex' }}>
      {ratingsTuples.map(([id, rating]) => {
        const name = getUserNameById(id);
        const height = (totalHeight / 5) * rating;
        return (
          <Box key={id} sx={{ width: `${width}%`, height }}>
            {name}: {rating}
          </Box>
        );
      })}
    </Card>
  )
};

export default Chart;