import React from 'react'
//Material UI
import { Button } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsCounter = () => {
    return (
        <div>
            <div className="counter-settings">
                <Button variant="outlined">
                    <SettingsIcon></SettingsIcon>
                </Button>
            </div>
        </div>
    )
}

export default SettingsCounter
