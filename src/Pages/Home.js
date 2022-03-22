import '../Styles/Home.css';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import { InputGroup } from "react-bootstrap";
import CustomName from '../Components/profile_name';
import { CustomStatCard } from '../Components/card_stat';
import { CustomGenStat } from '../Components/general_stat';

const Home = () => {
    return (
        <div className='content' >
            <div style={{ display: 'flex' }}>
                <div className='left_side'>
                    <h2 style={{ fontFamily: 'Roboto-Medium', width: '350px', color: '#383B52', marginLeft: '30px', marginTop: '30px' }}>Будьте здоровы, Александр!</h2>

                    <div className='gridStat' style={{ display: 'grid', marginLeft: '30px', marginTop: '30px' }}>
                        <CustomGenStat />
                        <CustomStatCard />
                        <CustomStatCard />
                        <CustomStatCard />
                        <CustomStatCard />
                        <CustomStatCard />
                    </div>

                </div>



                <div className="right_side1" >
                    <div style={{ marginLeft: 'auto', marginRight: '20px', display: 'flex', alignItems: 'baseline' }}>
                        <div style={{ width: '75px', height: 'auto', borderRadius: '75px', backgroundColor: '#EBEEF5', padding: '10px', marginRight: '20px' }}>
                            <h4 style={{ fontFamily: 'Roboto-Medium', margin: 'auto', padding: 'inherit' }}>СА</h4>
                        </div>
                        <h4 className='full_name_profile'>Стихин Александр Александрович</h4>
                    </div>
                    <div className='family'>
                        <h4 style={{ fontFamily: 'Roboto-Medium', marginBottom: '30px', marginTop:'15px' }} > Близкие Люди </h4>
                        <CustomName short_name="ИИ"
                            full_name="Иванов Иван Иванович" />
                        <CustomName short_name="ИИ"
                            full_name="Иванов Иван Иванович" />
                        <CustomName short_name="ИИ"
                            full_name="Иванов Иван Иванович" />
                    </div>

                </div>
            </div>
        </div>

    );

}

export default Home;