import React, { useState } from 'react'
//Material UI
import { Button, Drawer } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import FormikSettings from './forms/FormikSettings';

const SettingsCounter = ({time}) => {
    
    function getCustomTime(newTime) {
        time(newTime)
        console.log('desde settings',newTime)
        setOpen
    }

    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="counter-settings">
                <Button 
                    variant="outlined"
                    onClick={() => {setOpen(true)}}
                >
                    <SettingsIcon></SettingsIcon>
                </Button>
                <Drawer
                    open={open}
                    anchor={'right'}
                    onClose={()=> {setOpen(false)}}
                >
                    <FormikSettings
                        customFocus={getCustomTime}
                    ></FormikSettings>
                </Drawer>
            </div>
        </div>
    )
}

export default SettingsCounter
