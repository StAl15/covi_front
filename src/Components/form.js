import React from "react";
import { Form, Button } from 'bootstrap-4-react';
import '../Styles/form.css'

export default function CustomFormInput({ title, hint, input_type }) {
    return (
        <Form.Group style={{marginBottom:'30px'}}>
            <label htmlFor="input_form">{title}</label>
            <Form.Input style={{ width: 'fit-content', borderColor:'white' }} type={input_type} id="input_form" classname="input_form" placeholder={hint} shadow='sm'/>
        </Form.Group>
    )
}