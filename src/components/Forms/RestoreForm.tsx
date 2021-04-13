import React from 'react'
import Input from '../../components/Input/Input'
import {Link, Redirect} from 'react-router-dom'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useDispatch} from 'react-redux'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {sendPasswordReset} from '../../store/actions/authActions'


interface formData {
  email: string
}


const RestoreForm: React.FC = () => {
  const dispatch = useDispatch()
  const auth = useTypedSelector(state => state.auth)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email should have correct format')
      .required('Обязательное поле')
  })
  const {register, handleSubmit, errors} = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })
  const onSubmit = (e: formData) => {
    dispatch(sendPasswordReset(e.email))
  }

  if (auth.success) {
    return (
      <Redirect to={'/auth/login'}/>
    )
  }

  return (
    <div className="auth">
      <form id="auth-restore"  onSubmit={handleSubmit(onSubmit)} >
        <Input type="email"
               ref={register}
               errorText={errors.email?.message}
               placeholder="example@email.com"
               label="Email"/>
        <button className="auth__btn"><span>Отправить новый email на почту</span></button>

        {(auth.error) ? <div className='auth__error'>{auth.error}</div> : null}
      </form>
      <div className="auth__link">
        <Link to={'/auth/login'}>Вспомнил пароль</Link>
      </div>
    </div>

  )
}

export default RestoreForm