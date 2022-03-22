import '../Styles/Home.css';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import { InputGroup } from "react-bootstrap";
import CustomName from '../Components/profile_name';
import { CustomStatCard } from '../Components/card_stat';

const Home = () => {
    return (
        <div className='content' >
            <div style={{display:'flex'}}>
                <div className='left_side'>
                    <h2 style={{fontFamily:'Roboto-Medium', width:'350px', color:'#383B52', marginLeft:'30px', marginTop:'30px'}}>Будьте здоровы, Александр!</h2>

                    <div className='gridStat' style={{display:'grid', marginLeft:'30px', marginTop:'30px'}}>
                        <CustomStatCard />
                        <CustomStatCard />
                        <CustomStatCard />
                        <CustomStatCard />
                        <CustomStatCard />
                    </div>

                </div>

                <div className="right_side" >
                    <CustomName short_name="ШМ"
                        full_name="Шамбатов Мураз Акбар-Оглы" />
                    <h4 style={{ fontFamily: 'Roboto-Medium', marginBottom: '30px' }} > Пациенты </h4>
                    <CustomName short_name="ИИ"
                        full_name="Иванов Иван Иванович" />
                    <CustomName short_name="ИИ"
                        full_name="Иванов Иван Иванович" />
                    <CustomName short_name="ИИ"
                        full_name="Иванов Иван Иванович" />
                </div>
            </div>
        </div>

    );

}

export default Home;