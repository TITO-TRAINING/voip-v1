import React, { memo } from 'react'
import IconMenu from './IconMenu'

// styles
import * as S from './style'

interface MenuItemProps {
  title: string
  iconName: string
  className?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ iconName, title, className }) => {
  return (
    <S.MenuItem>
      <S.IconMenu>
        <IconMenu type={iconName} />
        <p className={className}>{title}</p>
      </S.IconMenu>
    </S.MenuItem>
  )
}

export default memo(MenuItem)