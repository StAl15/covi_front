import React, { useState } from "react";
import '../Styles/Sidebar.css';
import covi_logo from '../assets/images/logoCovi.svg'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from "./SidebarData";
import { Chip } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';


export const Sidebar = () => {

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#0971f1',
                darker: '#053e85',
            },
            neutral: {
                main: '#DBE2F5',
                contrastText: '#3F4249',
                darker: '#3F4249'
            },
            neutralInactive: {
                main: '#EBEEF5',
                contrastText: '#3F4249',
                darker: '#3F4249'
            }
        },
    });

    const [color, setColor]=useState('neutralInactive')
    const handleClick = ()=>{
        setColor('neutral')
    }
    
    return (
        <div className="nav-bar">
            <Link className="logo" to='/home'>
                <img src={covi_logo} alt='logo' />
                {/* <img src ={LogoSubtitle} alt='sub logo' /> */}
            </Link>
            <nav className='nav-menu'>
                <ul className="nav-menu-items">
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {/* {item.icon} */}
                                    <ThemeProvider theme={theme}>
                                        <Chip style={{paddingLeft:'12px', borderColor: '#00000' }} clickable={true} variant="outline" color={color} icon={item.icon} onClick={handleClick} />
                                    </ThemeProvider>
                                    
                                    <span className="item-title">{item.title}</span>

                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}