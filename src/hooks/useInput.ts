import React, { useState } from 'react'

const useInput = () => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const clean = () => {
    setValue('')
  }

  return {
      bind: {value, onChange},
      value,
      clean
  }

}

export default useInput