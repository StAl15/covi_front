/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BDiv } from 'bootstrap-4-react';
import "../Styles/CustomCard.css";

export const CustomStatCard = () => {
    return (
        <div style={{ marginBottom: '15px' }}>

            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <img src="line_vert.png" style={{ marginLeft: '0px', marginRight: '10px' }} />
                <h3 style={{ color: '#1C1D1F' }}>Статистика за </h3>
            </div>
            <div style={{ display: 'flex', flexWrap:'wrap', alignItems:'center' }}>
                <div className="card" style={{ borderRadius: '20px', borderColor: 'white', marginBottom:'20px' }}>
                    <BDiv shadow="sm" p="4" style={{ borderRadius: '20px', borderColor: 'white' }}>
                        <div style={{ display: 'flex' }}>
                            <h5 style={{ fontFamily: 'Roboto-Regular', marginRight:'10px' }}>Артериальное давление</h5>
                            <h5 style={{ marginLeft: 'auto', fontFamily: 'Roboto-Medium' }}>120/80</h5>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h5 style={{ fontFamily: 'Roboto-Regular' }}>Температура</h5>
                            <h5 style={{ marginLeft: 'auto', fontFamily: 'Roboto-Medium' }}>120/80</h5>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h5 style={{ fontFamily: 'Roboto-Regular' }}>Сатурация</h5>
                            <h5 style={{ marginLeft: 'auto', fontFamily: 'Roboto-Medium' }}>120/80</h5>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h5 style={{ fontFamily: 'Roboto-Regular' }}>Пульс</h5>
                            <h5 style={{ marginLeft: 'auto', fontFamily: 'Roboto-Medium' }}>120/80</h5>
                        </div>
                    </BDiv>
                </div>
                <div style={{display:'flex', flexWrap:'wrap', width:'400px', marginLeft:'20px'}}>
                    <h5 className="naming_stat">Сыпь</h5>
                    <h5 className="naming_stat">Лихорадка</h5>
                    <h5 className="naming_stat">Кашель</h5>
                    <h5 className="naming_stat">Чахотка</h5>
                    <h5 className="naming_stat">Насморк</h5>
                    
                </div>
            </div>


        </div>
    )
} 