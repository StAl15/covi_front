import React from "react";

export default function CustomName({ short_name, full_name }) {
    return (
        <div style={{ display: 'flex', alignItems:'center', marginBottom:'10px' }}>
            <div style={{width:'auto', height:'auto', borderRadius:'75px', backgroundColor:'#EBEEF5', padding:'10px', marginRight:'20px'}}>
                <h4 style={{ fontFamily: 'Roboto-Medium' , margin:'auto', padding:'inherit'}}>{short_name}</h4>
            </div>
            <h4>{full_name}</h4>

        </div>
    )
}