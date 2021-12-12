import './App.css'

import React, { useEffect, useState } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import CssBaseline from '@mui/material/CssBaseline'

import * as shortenerHelper from './helpers/shortener'

const config = require('./helpers/config.json')

function App () {
  const [alias, setAlias] = useState('')
  const [url, setUrl] = useState('')
  const [urlErrorText, setUrlErrorText] = useState('')
  const [resultMessage, setResultMessage] = useState('')

  const refreshAlias = () => {
    setResultMessage('')
    return shortenerHelper.generateAlias()
  }

  const makeShortUrl = async () => {
    const aliasToUse = alias;
    refreshAlias()
    setUrlErrorText('')
    setUrl('')
    const result = await shortenerHelper.makeShortUrl(aliasToUse, url)
    if (result) {
      setResultMessage('Created ' + window.location + config.apiUrl + aliasToUse)
    } else {
      setResultMessage('Error, please try again')
    }
  }

  const handleUrlChange = (event) => {
    setUrlErrorText('')
    setUrl(event.target.value)
    try {
      new URL(event.target.value) // eslint-disable-line no-new
    } catch (e) {
      setUrlErrorText('Must be a valid URL')
      console.log(e)
    }
  }

  useEffect(() => {
    setAlias(refreshAlias())
  }, [])

  return (
    <>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '100vh', padding: '10px' }}
      >
        <Grid item xs={3}>
          <Card elevation={0} variant='outlined'>
            <CardHeader title='Short URLs' />
            <CardContent>
              <p>Enter your URL</p>
              <TextField value={url} error={urlErrorText !== ''} helperText={urlErrorText} id='txt-url' label='URL' variant='outlined' onChange={handleUrlChange} />
              <p>Next proposed alias <strong>{alias}</strong></p>
              <p>{resultMessage}</p>
            </CardContent>
            <CardActions>
              <Button size='small' onClick={() => makeShortUrl()} disabled={url === '' || urlErrorText !== ''}>Make short URL</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default App
