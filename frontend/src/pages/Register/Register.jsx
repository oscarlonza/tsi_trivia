import Logo from '../../components/Logo'
import RegisterForm from '../../components/RegisterForm';
import { card, logo } from './register.module.css'

const Register = () => {
	return (
		<div className={card}>
			<div className={logo}>
				<Logo />
			</div>
			<RegisterForm />
		</div>
	)
}

export default Register;