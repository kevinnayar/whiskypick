import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { spacing } from '../../styles/theme';
import type { WhiskyType, NumericKey, Dir } from '../../types/baseTypes';
import FilterTypes from './FilterTypes';
import FilterSorters from './FilterSorters';

export type TypeUrlQuery = {
  filters: WhiskyType | WhiskyType[],
  sortKey: NumericKey,
  sortDir: Dir,
};

const FilterOptions = ({ onUpdateFilters }: { onUpdateFilters: (query: TypeUrlQuery) => void }) => {
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
      const finalQuery = { ...query } as TypeUrlQuery;

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
        onUpdateFilters(finalQuery);
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
    const finalQuery = { ...query, filters: newFilters } as TypeUrlQuery;
    push({
      pathname,
      query: finalQuery,
    });
    onUpdateFilters(finalQuery);
  };

  const handleSetSorter = (newKey: NumericKey, newDir: Dir) => {
    const finalQuery = { ...query, sortKey: newKey, sortDir: newDir } as TypeUrlQuery;
    push({
      pathname,
      query: finalQuery,
    });
    onUpdateFilters(finalQuery);
  };

  return (
    <Box sx={{ padding: `${spacing['10']}` }}>
      <Typography variant="h3">Filter by</Typography>
      <FilterTypes selected={filters} setSelected={handleSetFilters} />
      <Typography variant="h3">Sort by</Typography>
      <FilterSorters selectedKey={sortKey} selectedDir={sortDir} setSelected={handleSetSorter} />
    </Box>
  )
};

export default FilterOptions;