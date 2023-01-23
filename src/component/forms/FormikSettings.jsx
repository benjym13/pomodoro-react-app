import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Button, TextField }from '@mui/material';

const validationSchema = Yup.object().shape(
    {
        minutes: Yup.number(),
        short: Yup.number(),
        long: Yup.number(),
        }
    )

const FormikSettings = ({customFocus}) => {
    const formik = useFormik({
        initialValues : {
            minutes: '',
            seconds: 0,
            short: '',
            long: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            /* if(values.minutes == '') {
                alert(values.minutes = 22)
            } else {
            } */
            customFocus(values);
        },
    });

    return (
        <div style={{ padding: '24px', maxWidth:'300px'}}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="minutes"
                    name="minutes"
                    label="Pomodoro"
                    value={formik.values.minutes}
                    onChange={formik.handleChange}
                    error={formik.touched.minutes && Boolean(formik.errors.minutes)}
                    helperText={formik.touched.minutes && formik.errors.minutes}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="short"
                    name="short"
                    label="Short break"
                    value={formik.values.short}
                    onChange={formik.handleChange}
                    error={formik.touched.short && Boolean(formik.errors.short)}
                    helperText={formik.touched.short && formik.errors.short}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="long"
                    name="long"
                    label="Long break"
                    value={formik.values.long}
                    onChange={formik.handleChange}
                    error={formik.touched.long && Boolean(formik.errors.long)}
                    helperText={formik.touched.long && formik.errors.long}
                    margin="normal"
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
                </Button>
            </form>
        </div>
    );
};

export default FormikSettings;