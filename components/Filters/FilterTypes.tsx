import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import type { WhiskyType } from '../../types/baseTypes';
import { spacing } from '../../styles/theme';

type FiltersProps = {
  selected: WhiskyType[],
  setSelected: (keys: WhiskyType[]) => void,
};

const FilterTypes = ({ selected, setSelected }: FiltersProps) => {
  const types: WhiskyType[] = ['Bourbon', 'Irish', 'Rye', 'Scotch', 'Whisky'];

  return (
    <FormGroup sx={{ padding: `0 0 ${spacing['10']}` }}>
      {types.map(type => {
        const checked = selected.includes(type);
        const onChange = () => {
          if (checked) {
            const newSelected = Array.isArray(selected)
              ? selected.filter(t => t !== type)
              : [...types];
            setSelected(newSelected);
          } else {
            const isList = Array.isArray(selected);
            const newSelected = isList ? [...selected, type] : [selected, type];
            setSelected(newSelected);
          }
        }
        return (
          <FormControlLabel
            key={type}
            control={<Checkbox checked={checked} onChange={onChange} />}
            label={type}
          />
        );
      })}
    </FormGroup>
  );
};

export default FilterTypes;


