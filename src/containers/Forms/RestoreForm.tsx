import React from 'react'
import Input from '../../components/Input/Input'
import {Link} from 'react-router-dom'


const RestoreForm = () => {
  return (
    <div className="auth">
      <form  id="auth-restore">
        <Input type="email" placeholder="example@email.com" label="Email"/>
        <button className="auth__btn"><span>Отправить новый email на почту</span></button>
        <div className="auth__link">
          <Link to={'/auth/login'}>Вспомнил пароль</Link>
        </div>

      </form>

      {/*<div className="auth__success" >*/}
      {/*  <div className="auth__success_text">Письмо с информацией о восстановлении пароля отправлено на ваш email!</div>*/}
      {/*  <a className="auth__btn auth__success_link" href="./signin.html"><span>Ок</span></a>*/}
      {/*</div>*/}
    </div>

  )
}

export default RestoreForm