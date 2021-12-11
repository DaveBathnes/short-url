import './App.css';

import React, { useState } from 'react'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import * as shortenerHelper from './helpers/shortener';

function App() {

  const [shortText, setShortText] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [result, setResult] = useState("");

  const makeShortUrl = () => {
    const result = shortenerHelper.makeShortUrl(shortText, longUrl);
    setResult(result);
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh', padding: '10px' }}
    >
      <Grid item xs={3}>
        <Card elevation={0} variant="outlined">
          <CardHeader title="Short Links" />
          <CardContent>
            <p>Enter your long URL to make a shorter version</p>
            <TextField id="txt-long" label="Long URL" variant="outlined" onChange={(e) => setLongUrl(e.value)} />
            <br />
            <br />
            <p>Choose a short version.</p>
            <TextField id="txt-alias" label="Short text" variant="outlined" onChange={(e) => setShortText(e.value)} />
          </CardContent>
          <CardContent>
            <p>{result}</p>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => makeShortUrl()}>Make short URL</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
