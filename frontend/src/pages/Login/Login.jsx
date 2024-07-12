import LoginForm from "../../components/LoginForm"
import Logo from "../../components/Logo"
import { card, logo } from './login.module.css'

const Login = () => {
    return (
        <div className={card}>
			<div className={logo}>
				<Logo />
			</div>
			<LoginForm />
		</div>
    )
}

export default Login