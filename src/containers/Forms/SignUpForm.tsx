import React from 'react'
import Input from '../../components/Input/Input'
import {Link} from 'react-router-dom'

// interface Props {
//   onClick: () => void;
// }


const SignUpForm = () => {


  return (
    <>
      <form className="auth" id="auth-signup">
        <Input type="email" placeholder="example@email.com" label="Email"/>
        <Input type="password" placeholder="**************" label="Пароль"/>
        <Input type="password" placeholder="**************" label="Повторите пароль" id="passwordConfirm"/>

        <button className="auth__btn"><span>Зарегистрироваться</span></button>
      </form>
      <div className="auth__link">
        <Link to={'/auth/login'}>Уже есть аккаунт?</Link>
        {/*<a href="./restore.html">Уже есть аккаунт</a>*/}
      </div>
    </>
  )
}

export default SignUpForm