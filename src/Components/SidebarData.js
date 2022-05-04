import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import NordicWalkingIcon from '@mui/icons-material/NordicWalking';

export const SidebarData = [
    {
        title: 'Самочувствие',
        path: '/home',
        icon: <FavoriteIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Врач',
        path: '/login',
        icon: <MedicalServicesIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Процедуры',
        path: '/register',
        icon: <NordicWalkingIcon />,
        cName: 'nav-text'
    }
]