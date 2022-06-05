import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { colors, spacing } from '../styles/theme';
import type { WhiskyType, NumericKey, Dir } from '../types/baseTypes';

const StyledFilters = styled.div`
  position: fixed;
  left: 0;
  background: ${colors.black};
  color: ${colors.primary};
  padding: ${spacing['10']};
`;

type FiltersProps = {
  selected: WhiskyType[],
  setSelected: (keys: WhiskyType[]) => void,
};

const TypeFilters = ({ selected, setSelected }: FiltersProps) => {
  const types: WhiskyType[] = [ 'Bourbon', 'Irish', 'Rye', 'Scotch', 'Whisky'];

  return (
    <FormGroup>
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
            control={<Checkbox checked={checked} onChange={onChange}/>}
            label={type}
          />
        );
      })}
    </FormGroup>
  );
};

type SortersProps = {
  selectedKey: NumericKey,
  selectedDir: Dir,
  setSelected: (k: NumericKey, d: Dir) => void,
};

const Sorters = ({ selectedKey, selectedDir, setSelected }: SortersProps) => {
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

const Filters = () => {
  const { query, push, pathname, isReady } = useRouter();

  const defaultFilters: WhiskyType[] = ['Bourbon', 'Irish', 'Rye', 'Scotch', 'Whisky'];
  const defaultSortKey: NumericKey = 'rating';
  const defaultSortDir: Dir = 'desc';

  const [filters, setFilters] = useState<WhiskyType[]>(query.filters as WhiskyType[] || defaultFilters);
  const [sortKey, setSortKey] = useState<NumericKey>(query.sortKey as NumericKey || defaultSortKey);
  const [sortDir, setSortDir] = useState<Dir>(query.sortDir as Dir || defaultSortDir);

  useEffect(() => {    
    if (isReady) {
      let queryChanged = false;
      const finalQuery = { ...query };

      if (!query.filters && filters) {
        finalQuery.filters = filters;
        queryChanged = true;
      }

      if (!query.sortKey && sortKey) {
        finalQuery.sortKey = sortKey;
        queryChanged = true;
      }

      if (!query.sortDir && sortDir) {
        finalQuery.sortDir = sortDir;
        queryChanged = true;
      }

      if (queryChanged) {
        push({
          pathname,
          query: finalQuery,
        });
      }
    }
  }, [isReady]);

  useEffect(() => {
    const queryFilters = query.filters as WhiskyType[] || [];
    if (JSON.stringify([...filters].sort()) !== JSON.stringify([...queryFilters].sort())) {
      setFilters(queryFilters);
    }

    if (sortKey !== query.sortKey) {
      setSortKey(query.sortKey as NumericKey);
    }

    if (sortDir !== query.sortDir) {
      setSortDir(query.sortDir as Dir);
    }
  }, [query]);

  const handleSetFilters = (newFilters: WhiskyType[]) => {
    push({
      pathname,
      query: { ...query, filters: newFilters },
    });
  };

  const handleSetSorter = (newKey: NumericKey, newDir: Dir) => {
    push({
      pathname,
      query: { ...query, sortKey: newKey, sortDir: newDir },
    });
  };

  return (
    <StyledFilters>
      <Typography variant="h3">Filter by</Typography>
      <TypeFilters selected={filters} setSelected={handleSetFilters} />
      <Typography variant="h3">Sort by</Typography>
      <Sorters selectedKey={sortKey} selectedDir={sortDir} setSelected={handleSetSorter} />
    </StyledFilters>
  )
};



export default Filters;



