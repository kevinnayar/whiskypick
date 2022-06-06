import { useState } from 'react';
import Fab from '@mui/material/Fab';
import Drawer from '@mui/material/Drawer';
import FilterOptions, { TypeUrlQuery } from './FilterOptions';
import { spacing } from '../../styles/theme';

const Filters = ({ onUpdateFilters }: { onUpdateFilters: (query: TypeUrlQuery) => void }) => {
  const [drawerVisible, setDrawerVisibility] = useState(false);
  const showDrawer = () => setDrawerVisibility(true);
  const hideDrawer = () => setDrawerVisibility(false);

  const sx = {
    position: 'fixed',
    right: `${spacing['16']}`,
    bottom: `${spacing['16']}`,
    padding: `${spacing['8']}`,
  };

  return (
    <>
      <Fab color="primary" onClick={showDrawer} sx={sx}>
        <i className="material-icons">
          {drawerVisible ? 'close' : 'menu'}
        </i>
      </Fab>
      <Drawer open={drawerVisible} onClose={hideDrawer}>
        <FilterOptions onUpdateFilters={onUpdateFilters} />
      </Drawer>
    </>
  )
};

export default Filters;