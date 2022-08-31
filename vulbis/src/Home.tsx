import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import styles from './styles/home.module.css'

function App() {
  return (
    <Stack className={styles.body}>
      <Stack className={styles.header}>
        <Typography>
          Test
        </Typography>
      </Stack>
    </Stack>
  );
}

export default App;
