import { user_regex } from '../../services/validations/auth.validation';
import { groupForm } from './registerForm.module.css'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();

    const { name, nickname, phone, password, confirm_password } = event.target;
    const user = {
      name: name.value,
      nickname: nickname.value,
      phone: phone.value,
      password: password.value,
      confirm_password: confirm_password.value
    };

    const { error } = user_regex.validate(user)

    if (error) return alert(`Error, ${error.details[0].message}`)

    try {
      const register = await fetch('http://localhost:9000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const response = await register.json()

      if (!response.process) return alert('Error al guardar nuevo usuario')

      alert('Usuario registrado con éxito')

      navigate('/login')

    } catch (error) {
      alert(`Error, ${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={groupForm}>
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="text" name="nickname" placeholder="Usuario" required />
        <input type="text" name="phone" placeholder="+5700000000000" />
        <input type="password" name="password" placeholder="********" required />
        <input type="password" name="confirm_password" placeholder="********" required />
        <input type="submit" value="Registrar" />
      </div>
    </form>
  )
}

export default RegisterForm