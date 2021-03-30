import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input/Input'

const SignInForm = () => {
  return (
    <>
      <form className="auth" id="auth-signin">
        <Input type="email" placeholder="example@email.com" label="Email"/>
        <Input type="password" placeholder="**************" label="Пароль"/>
        <Input type="checkbox" label="Запомнить меня" id="remember"/>

        <button  className="auth__btn"><span>Войти</span></button>
      </form>

      <div className="auth__link">
        <Link to={'/auth/registration'}>Зарегистрироваться?</Link>
        <Link to={'/auth/restore'}>Забыли пароль?</Link>
      </div>
    </>
  )
}

export default SignInForm