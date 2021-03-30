import React from 'react'

interface Props {
  type: string
  placeholder?: string
  label: string
  errorText?: string
  id?: string
}


const Input = ({type, placeholder, label, errorText, id} : Props) => {

  const cls = ['auth__input']
  if (errorText) cls.push('error')
  if (type === 'checkbox') cls[0] = 'auth__checkbox'

  const $label = (
    (type !== 'checkbox')
      ? <label htmlFor={type && id}>{label}</label>
      : <>
        <label htmlFor={type && id}>
          <svg viewBox="0 0 28 28"><path d="M24.3124 7.81053L10.2881 21.8348L3.68848 15.2351L5.33348 13.5901L10.2881 18.5331L22.6674 6.16553L24.3124 7.81053Z"></path></svg>
        </label>
        <span>{label}</span>
      </>
  )

  const $error = (
    <div className="auth-error">
      <div className="auth-error__text">{errorText}</div>
      <div className="auth-error__cross">
        <svg width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C9.34711 22.0023 6.80218 20.9495 4.9263 19.0737C3.05042 17.1978 1.99762 14.6528 2 11.9999V11.7999C2.08179 7.79217 4.5478 4.2201 8.26637 2.72301C11.9849 1.22591 16.2381 2.09284 19.074 4.92595C21.9365 7.78603 22.7932 12.0893 21.2443 15.8276C19.6955 19.5659 16.0465 22.0023 12 22ZM12 13.4099L14.59 15.9999L16 14.5899L13.41 11.9999L16 9.40995L14.59 7.99995L12 10.5899L9.41001 7.99995L8.00001 9.40995L10.59 11.9999L8.00001 14.5899L9.41001 15.9999L12 13.4109V13.4099Z"
                fill="#FC4B50"></path>
        </svg>
      </div>
    </div>
  )

  return (
    <div className={cls.join(' ')}>
      <input type={type}
             id={type && id}
             placeholder={placeholder}/>
      {$label}

      {errorText && $error}
    </div>
  )
}

export default Input