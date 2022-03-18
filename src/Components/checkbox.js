import React from "react";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

export const CustomCheckbox = ({ param, status , onChange}) => {
    return (
        <div style={{marginBottom:' 20px'}}>
            <Checkbox
                icon={<div style={{ backgroundColor: "#DBE2F5", borderRadius: '5px' }}><Icon.FiCheck color="#174A41" size={30} /></div>}
                name="my-input"
                checked={status}
                onChange={(value) => {
                    onChange(value)
                    console.log(!status)
                }} borderRadius={5}
                borderColor="#DBE2F5" size={30}
                style={{ cursor: "pointer", backgroundColor: "#DBE2F5"}}
                labelStyle={{ marginLeft: 5, userSelect: "none", fontSize: "15pt" }}
                label={param}
            />

        </div>
    )
}