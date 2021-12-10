import './App.css';

import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        <Card>
          <CardContent>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
