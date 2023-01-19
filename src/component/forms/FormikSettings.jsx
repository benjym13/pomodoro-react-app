import React from 'react'
//Formik
import { Formik, Field, } from 'formik';
//Material
import { Button, TextField  } from '@mui/material';
// Yup
import  * as Yup from 'yup';

const FormikSettings = ({customFocus}) => {
    const initialValues = {
        minutes: '',
        seconds: 0
    }
    const schema = Yup.object().shape(
        {
            minutes: Yup.number()
            }
        )

    return (
        <div style={{ padding: '24px', maxWidth:'300px'}}>
            <Formik
                initialValues={initialValues}
                validationSchema = {schema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                   /*  alert(JSON.stringify(values, null, 2)); */
                        customFocus(values)
                    }, 1000);
                }}
                >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <TextField
                        id="minutes"
                        name="minutes"
                        placeholder="pomodoro"
                        type="text"
                        />
                        <TextField
                        id="short-break"
                        name="short-break"
                        placeholder="Short Break"
                        type="text"
                        />
                        <TextField
                        id="long-break"
                        name="long-break"
                        placeholder="Long Break"
                        type="text"
                        />
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        <Button variant='contained' type="submit">Submit</Button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default FormikSettings