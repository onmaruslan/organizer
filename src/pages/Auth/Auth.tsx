import './auth.scss'
import React from 'react'
import {Redirect, useParams} from 'react-router-dom'

import SignInForm from '../../containers/Forms/SignInForm'
import SignUpForm from '../../containers/Forms/SignUpForm'
import RestoreForm from '../../containers/Forms/RestoreForm'



interface ParamTypes {
  slug: string
}

const Auth = () => {
  const {slug} = useParams<ParamTypes>()

  let title
  let formRender
  switch (slug) {
    case 'login':
      formRender = <SignInForm />
      title = 'Вход'
      break
    case 'registration':
      formRender = <SignUpForm />
      title = 'Регистрация'
      break
    case 'restore':
      formRender = <RestoreForm />
      title = 'Восстановить пароль'
      break
    default:
      title = 'Вход'
      formRender = <Redirect to={'/auth/login'}/>
  }

  return (
    <div className="auth-wrap">
      <div className="auth__title">Авторизация / <span>{title}</span></div>
      {formRender}
    </div>
  )
}

export default Auth