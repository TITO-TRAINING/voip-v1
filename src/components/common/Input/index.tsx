import React, { memo, ReactNode } from 'react'

// icon
import { ReactComponent as Clear } from '@/assets/icons/Clear.svg'
import { ReactComponent as Search } from '@/assets/icons/Clear.svg'

// styles
import * as S from './style'

type InputProps = {
  type?: string
  placeholder: string
  allowClear?: boolean
  isSearch?: boolean
  label?: string
  className?: string
  disabled?: boolean
  defaultValue?: string
  prefix?: ReactNode
  size?: 'large' | 'small'
}

const MainInput: React.FC<InputProps> = ({
  type,
  placeholder,
  allowClear,
  isSearch,
  label,
  className,
  disabled,
  size,
  defaultValue,
  prefix,
}) => {
  return (
    <>
      <label htmlFor='input'>{label}</label>
      <S.Input
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={type}
        className={`${className} ${size}`}
        allowClear={allowClear && { clearIcon: <Clear /> }}
        prefix={isSearch ? <Search /> : prefix}
        disabled={disabled}
      />
    </>
  )
}

MainInput.defaultProps = {
  type: 'text',
  allowClear: false,
  isSearch: false,
  label: '',
  className: '',
  disabled: false,
  size: 'large',
  defaultValue: '',
  prefix: undefined,
}

export default memo(MainInput)
