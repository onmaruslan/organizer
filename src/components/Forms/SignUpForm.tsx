import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Input from '../Input/Input'
import {setError, signUp} from '../../store/actions/authActions'
import {useTypedSelector} from '../../hooks/useTypedSelector'


// interface Props {
//   onClick: () => void;
// }
interface formData {
  email: string
  password: string
}

const SignUpForm: React.FC = () => {
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
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (e: formData) => {
    dispatch(signUp(e.email, e.password))
  }

  useEffect(() => {
    return () => {
      dispatch(setError(null))
    }
  },[])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}
            className="auth"
            id="auth-signup">
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
        <Input type="password"
               placeholder="**************"
               label="Повторите пароль"
               ref={register}
               errorText={errors.passwordConfirm?.message}
               id="passwordConfirm"/>
        <button className="auth__btn"><span>Зарегистрироваться</span></button>
        {(auth.error) ? <div className='auth__error'>{auth.error}</div> : null}
      </form>

      <div className="auth__link">
        <Link to={'/auth/login'}>Уже есть аккаунт?</Link>
        {/*<a href="./restore.html">Уже есть аккаунт</a>*/}
      </div>
    </>
  )
}

export default SignUpForm