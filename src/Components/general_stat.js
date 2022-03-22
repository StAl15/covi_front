import React from "react";
import { BDiv } from 'bootstrap-4-react';
import "../Styles/genstat.css";

export const CustomGenStat = () => {
    return (
        <BDiv shadow="sm" p="4" bg="white" style={{ borderRadius: '20px', borderColor: 'white', width:'fit-content', marginBottom:'20px' }}>
            <h5>Ваше состояние:</h5>
            <h4 className="curent_patient_state" style={{color:'#4A74B0'}}>НЕУДОВЛЕТВОРИТЕЛЬНО</h4>
            <button>Звонок</button>

        </BDiv>
    )
}