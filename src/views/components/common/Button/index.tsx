import React, { memo, ReactNode } from 'react'

// styles
import * as S from './style'

interface ButtonProps {
  children: ReactNode
  size?:
    | 'large'
    | 'medium'
    | 'small'
    | 'large-long'
    | 'medium-long'
    | 'small-long'
  kind?: 'primary' | 'secondary' | 'light' | 'error'
  className?: string
  icon?: ReactNode
  disabled?: boolean
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size,
  kind,
  icon,
  disabled,
  onClick,
}) => {
  return (
    <S.Button
      className={`${size} ${kind} ${className}`}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  size: 'large',
  kind: 'primary',
  className: '',
  icon: '',
  disabled: false,
}

export default memo(Button)
