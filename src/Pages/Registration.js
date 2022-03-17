import '../Styles/Register.css';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import { InputGroup } from "react-bootstrap";
import CustomButton from '../Components/button';
import CustomFormInput from '../Components/form';


const Registration = () => {
    return (
        <div className='content'>
            <div className='main'>
                <Form className="table_input" shadow>
                    <img src="logoCovi.svg" />
                    <CustomFormInput title="Email" hint="Введите email" input_type="email" />
                    <CustomFormInput title="Номер телефона" hint="Введите номер" input_type="phone" />
                    <CustomFormInput title="Пароль" hint="Введите пароль" input_type="password" />
                    <div style={{ display: 'flex', placeContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}><CustomButton text="Зарегистрироваться" /></div>

                </Form>
                <p>Уже есть аккаунт? Войти</p>
            </div>
        </div>
    );

}

export default Registration;