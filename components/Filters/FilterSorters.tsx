import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { NumericKey, Dir } from '../../types/baseTypes';

type SortersProps = {
  selectedKey: NumericKey,
  selectedDir: Dir,
  setSelected: (k: NumericKey, d: Dir) => void,
};

const FilterSorters = ({ selectedKey, selectedDir, setSelected }: SortersProps) => {
  const list: [NumericKey, Dir, string][] = [
    ['rating', 'desc', 'Highest Rated'],
    ['rating', 'asc', 'Lowest Rated'],
    ['price', 'desc', 'Most Expensive'],
    ['price', 'asc', 'Cheapest'],
    ['age', 'desc', 'Oldest Whiskies'],
    ['age', 'asc', 'Youngest Whiskies'],
  ];

  const onChange = (e: any) => {
    const value = e.target.value;
    const [newKey, newDir] = value.split('.');
    setSelected(newKey, newDir);
  }

  return (
    <FormGroup>
      <RadioGroup value={`${selectedKey}.${selectedDir}`} onChange={onChange}>
        {list.map(([key, dir, name]) => {
          return (
            <FormControlLabel
              key={`${key}.${dir}`}
              value={`${key}.${dir}`}
              control={<Radio />}
              label={name}
            />
          );
        })}
      </RadioGroup>
    </FormGroup>
  );
};

export default FilterSorters;