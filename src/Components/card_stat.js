/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BDiv } from 'bootstrap-4-react';

export const CustomStatCard = () => {
    return (
        <div style={{ marginBottom: '15px' }}>

            <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <img src="line_vert.png" style={{ marginLeft: '0px', marginRight: '10px' }} />
                <h3 style={{ color: '#1C1D1F' }}>Статистика за </h3>
            </div>
            <div style={{display:'flex'}}>
                <div className="card" style={{ borderRadius: '20px', borderColor: 'white' }}>
                    <BDiv shadow="sm" p="4" style={{ borderRadius: '20px', borderColor: 'white' }}>
                        <div style={{ display: 'flex' }}>
                            <h5 style={{ fontFamily: 'Roboto-Regular' }}>Артериальное давление</h5>
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

                <div>

                </div>
            </div>
            

        </div>
    )
} 