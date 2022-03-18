import React, { useState } from "react";
import { CustomCheckbox } from "../Components/checkbox";
import CustomName from "../Components/profile_name";
import "../Styles/CreateFeeling1.css";
import CustomButton from '../Components/button';

export default function CreateFeeling1() {
    const [cold, setCold] = useState(false);
    return (
        <div className="content">
            <div style={{ display: 'flex' }}>
                <div className="left_side">

                    <div className="list_symptoms" style={{ marginTop: '70px', marginLeft: '30px' }}>
                        <h4 style={{ marginLeft: '5px', marginBottom: '20px', fontFamily: 'Roboto-Medium' }}>Симптомы</h4>
                        <CustomCheckbox param="Кашель" status={cold} onChange={setCold} />
                        <CustomCheckbox param="Лихорадка" />
                        <CustomCheckbox param="Усталость" />
                        <CustomCheckbox param="Сыпь" />
                        <CustomCheckbox param="Сыпь" />
                        <CustomCheckbox param="Сыпь" />
                        <CustomCheckbox param="Сыпь" />

                    </div>


                </div>
                <div style={{ display: 'flex', width: '-webkit-fill-available', alignItems: 'right', marginTop: 'auto' }}><div style={{ marginLeft: 'auto', marginRight: '20px' }}><CustomButton text="Далее" /></div></div>

                <div className="right_side" style={{ marginLeft: 'auto', marginTop: '30px', marginRight: '20px' }}>
                    <CustomName short_name="ШМ" full_name="Шамбатов Мураз Акбар-Оглы" />
                    <h4 style={{ fontFamily: 'Roboto-Medium', marginBottom: '30px' }}>Пациенты</h4>
                    <CustomName short_name="ИИ" full_name="Иванов Иван Иванович" />
                    <CustomName short_name="ИИ" full_name="Иванов Иван Иванович" />
                    <CustomName short_name="ИИ" full_name="Иванов Иван Иванович" />
                </div>
            </div>


        </div>
    )
}