import React from "react";
import { Form, Button } from 'bootstrap-4-react';
import '../Styles/form.css'

export default function CustomFormInput({ title, hint, input_type, onChange }) {
    return (
        <Form.Group style={{marginBottom:'30px'}}>
            <label htmlFor="input_form">{title}</label>
            <Form.Input style={{ width: 'fit-content', borderColor:'white', borderRadius:'10px', paddingTop:'25px', paddingBottom:'25px' }} type={input_type} id="input_form" classname="input_form" placeholder={hint} shadow='sm'/>
        </Form.Group>
    )
}