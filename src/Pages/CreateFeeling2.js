import React from "react";
import CustomName from "../Components/profile_name";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../Styles/CreateFeeling2.css";
import { CustomInputCf2 } from "../Components/custom_input_cf2";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

export default function CreateFeelings2() {
    return (
        <div className="content" >
            <div style={
                { display: 'flex' }} >
                <div className="left_side" >
                    <div style={{ marginLeft: '20px', marginTop: '100px', display: 'grid' }} className="list_symptoms_2">
                        {/* <custom_input_cf2 name="sd" value="sd" /> */}

                        <CustomInputCf2 name="Температура" defaultValue="36.6" />
                        <CustomInputCf2 name="Пульс" defaultValue="80" />
                        <CustomInputCf2 name="Сатурация" defaultValue="0-100" />
                        <CustomInputCf2 name="Артериальное давление" defaultValue="50-220/40-130" />
                        <CustomInputCf2 name="Частота дыхательного движения" defaultValue="50-220/40-130" />


                    </div>

                </div>



                <div className="right_side"
                    style={
                        { marginLeft: 'auto', marginTop: '30px', marginRight: '20px' }} >
                    <CustomName short_name="ШМ"
                        full_name="Шамбатов Мураз Акбар-Оглы" />
                    <h4 style={
                        { fontFamily: 'Roboto-Medium', marginBottom: '30px' }} > Пациенты </h4> <CustomName short_name="ИИ"
                            full_name="Иванов Иван Иванович" />
                    <CustomName short_name="ИИ"
                        full_name="Иванов Иван Иванович" />
                    <CustomName short_name="ИИ"
                        full_name="Иванов Иван Иванович" />
                </div>
            </div>


        </div>
    )
}