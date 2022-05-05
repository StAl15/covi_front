import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import Icon from "../assets/images/question_icon.png";
import {useState} from 'react'

export const CustomInputCf2 = ({ name, defaultValue }) => {
    const [open, setOpen] = useState('false');
    return (

        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="outlined-adornment">{name}</InputLabel>
            <FilledInput
                disableUnderline
                style={{ borderRadius: "15px", backgroundColor: 'white' }}
                id="outlined-adornment"
                label={name}
                defaultValue={defaultValue}
                endAdornment={
                    <img style={{ marginTop: '15px' }} src={Icon}/>}
            >

            </FilledInput>
        </FormControl>

    )
}

