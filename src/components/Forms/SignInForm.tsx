import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Input from '../Input/Input'
import {setError, setSuccess, signIn} from '../../store/actions/authActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

interface formData {
  email: string
  password: string
  remember: boolean
}

const SignInForm: React.FC = () => {
  const dispatch = useDispatch()
  const auth = useTypedSelector(state => state.auth)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email should have correct format')
      .required('Обязательное поле'),
    password: yup
      .string()
      .required('Обязательное поле')
      .min(6, 'Минимум 6 символов'),
    remember: yup
      .boolean()
  })

  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (e: formData) => {
    dispatch(signIn(e.email, e.password, e.remember))
  }


  useEffect(() => {
    return () => {
      dispatch(setError(null))
      dispatch(setSuccess(null))
    }
  },[])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}
            className="auth"
            id="auth-signin">
        <Input type="email"
               placeholder="example@email.com"
               ref={register}
               errorText={errors.email?.message}
               label="Email"/>
        <Input type="password"
               placeholder="**************"
               ref={register}
               errorText={errors.password?.message}
               label="Пароль"/>
        <Input type="checkbox"
               ref={register}
               errorText={errors.remember?.message}
               label="Запомнить меня"
               id="remember"/>

        <button className="auth__btn"><span>Войти</span></button>
        {(auth.error) ? <div className='auth__error'>{auth.error}</div> : null}
        {(auth.success) ? <div className='auth__success'>{auth.success}</div> : null}
      </form>

      <div className="auth__link">
        <Link to={'/auth/registration'}>Зарегистрироваться?</Link>
        <Link to={'/auth/restore'}>Забыли пароль?</Link>
      </div>
    </>
  )
}

export default SignInForm