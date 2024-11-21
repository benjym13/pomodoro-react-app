import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './component/counter'
import SettingsCounter from './component/SettingsCounter'
import { Grid } from '@mui/material'

function App() {

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6} justifyContent='flex-start'>
          <h3>Pomodoro.timer</h3>
        </Grid>
        <Grid item xs={6}justifyContent='flex-end'>
          <Grid container >
            <h3>PTwitter</h3>
            <h3>Linkedin</h3>
            <h3>Github</h3>
          </Grid>
        </Grid>
      </Grid>
      <Counter></Counter>
    </div>
  )
}

export default App
