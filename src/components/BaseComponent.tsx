import type { FC, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const BaseComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
  <>
    <AppBar position="static" component="header">
      <Toolbar>
        <Typography variant="h4" component="h1">
          <Link href="/" color="inherit" underline="none">H6AK ROOM</Link>
        </Typography>
      </Toolbar>
    </AppBar>
    <Box component="main" sx={{ p: 3 }}>
      {children}
    </Box>
    <AppBar position="static" component="footer">
      <Toolbar>
        <Typography variant="body1">© Hiro'aki Hotta</Typography>
      </Toolbar>
    </AppBar>
  </>
  );
};

export default BaseComponent;
