import React, { memo, useCallback, useState } from 'react'
import useTranslation from '@/hooks/useTranslation'
import { Layout, Menu } from 'antd'
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import type { RenderIconInfo } from 'rc-menu/lib/interface'
import HeaderSidebar from './component/HeaderSideBar'
import { generateMenu } from './utils'
import CustomSidebar from './style'

const { Sider } = Layout

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prevState) => !prevState)
  }, [])

  const renderExpandIcon = useCallback(
    (props: RenderIconInfo) =>
      props.isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />,
    []
  )

  const { t } = useTranslation('sideBar')

  const translator = (keyTranslate: string) => {
    return t(keyTranslate)
  }

  const generatedMenus = generateMenu(translator)

  return (
    <CustomSidebar>
      <Sider
        className='sidebar'
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <HeaderSidebar
          isCollapse={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
        <Menu
          mode='inline'
          theme='light'
          items={generatedMenus}
          expandIcon={renderExpandIcon}
          className='menu-sidebar'
          inlineIndent={12}
        />
      </Sider>
    </CustomSidebar>
  )
}

export default memo(Sidebar)
