import React from 'react';
import { TextField } from '@mui/material';

function Input({ label, type, width, ml, fullWidth, select, defaultValue, date }) {
    return (
        <>
            <TextField
                margin="normal"
                fullWidth={fullWidth}
                required
                label={label}
                sx={{ width: width, ml: ml }}
                autoFocus
                type={type}
                select={select}
                date={date}
                defaultValue={defaultValue}
            />
        </>
    );
}

export default Input;
