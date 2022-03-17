import React from "react";
import { Button } from "bootstrap-4-react/lib/components";

export default function CustomButton({text}){
    return(
        <Button primary outline style={{fontFamily:'Roboto-Medium', width:'-webkit-fill-available', borderRadius:'10px', padding:'12px'}}>{text}</Button>
    )
}