import './auth.scss'
import React, {useEffect, useRef, useState }  from 'react'
import {Redirect, useParams} from 'react-router-dom'

import SignInForm from '../../components/Forms/SignInForm'
import SignUpForm from '../../components/Forms/SignUpForm'
import RestoreForm from '../../components/Forms/RestoreForm'


interface ParamTypes {
  slug: string
}


const Auth: React.FC = () => {
  const vw = document.documentElement.clientWidth / 100
  const $authWrap = useRef<HTMLDivElement | null>(null)
  const [stateHeight, setStateHeight] = useState(35 + 'vw');

  // Отрисовка нужной формы по урлу
  const {slug} = useParams<ParamTypes>()

  useEffect(() => {
    if ($authWrap.current) {

      // Анимация при изменении формы
      const arrayChildren = Array.from($authWrap.current.children)
      const height = arrayChildren
        .map(item => item.scrollHeight)
        .reduce((sum, current ) => sum + current)
      setStateHeight(height / vw + 12 + 'vw')
    }
  },[slug, vw])

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
    <div ref={$authWrap} style={{height: stateHeight}} className="auth-wrap">
      <div className="auth__title">Авторизация / <span>{title}</span></div>
      {formRender}
    </div>
  )
}

export default Auth