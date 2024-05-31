import './Logo.scss'
import logo from '../assets/images/logo-2.png'
import CustomButtom from '../components/CustomButton'
const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt="Full Stack Club" />
            <div className="button-container"><CustomButtom>Entrar</CustomButtom></div>
        </div>
    )
}

export default Login