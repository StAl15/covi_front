import '../Styles/Login.css';
import { Navbar, Nav, Button, Dropdown, Form, Collapse } from 'bootstrap-4-react';
import { InputGroup } from "react-bootstrap";
import CustomFormInput from '../Components/form';
import CustomButton from '../Components/button';

const Login = () => {
    return (

        <div className='content'>
            <div className='main'>
                <Form className="table_input" shadow>
                    <img src="logoCovi.svg" />
                    <CustomFormInput title="Email" hint="Введите email" input_type="email" />
                    <CustomFormInput title="Пароль" hint="Введите пароль" input_type="password" />
                    <p>Забыли пароль?</p>
                    <Form.Check style={{ marginBottom: '20px' }}>
                        <Form.Checkbox id="rememberMe" />
                        <Form.CheckLabel htmlFor="rememberMe">Запомнить меня</Form.CheckLabel>
                    </Form.Check>
                    <div style={{ display: 'flex', placeContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}><CustomButton text="Войти" /></div>

                </Form>
                <p>Нет аккаунта? Зарегистрироваться</p>
            </div>
        </div>

    );

}

export default Login;