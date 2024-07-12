
import { login_regex } from '../../services/validations/auth.validation'
import { groupForm } from './loginForm.module.css'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault();

        const { nickname, password } = event.target;
        const user = {
            nickname: nickname.value,
            password: password.value
        };

        const { error } = login_regex.validate(user)

        if (error) return alert(`Error, ${error.details[0].message}`)

        try {
            const login = await fetch('http://localhost:9000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            const response = await login.json()
            console.log(response)
            if (!response.process) return alert('Error al iniciar sesión de usuario')

            alert('Inicio de sesión satisfactorio')

            localStorage.setItem('user', response.data.token)

            navigate('/')
        } catch (error) {
            alert(`Error, ${error}`)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className={groupForm}>
                <input type="text" name="nickname" placeholder="Usuario" required />
                <input type="password" name="password" placeholder="********" required />
                <input type="submit" value="Ingresar" />
            </div>
        </form>
    )
}

export default LoginForm