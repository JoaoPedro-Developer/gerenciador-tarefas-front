import { useNavigate } from 'react-router-dom'
import CustomButtom from './CustomButton'
import './SideBar.scss'
import logo from '../assets/images/logo.png'

const SideBar = () => {
    const navigate = useNavigate()
    const handleSignOutClik = () => {
        navigate('/login')
    }
    return <div className="sidebar-container">
        <div className="logo">
            <img src={logo} alt="Full Stack Club"/>
        </div>

        <div className="sign-out">
            <CustomButtom onClick={handleSignOutClik}>Sair</CustomButtom>
        </div>
    </div>
}

export default SideBar