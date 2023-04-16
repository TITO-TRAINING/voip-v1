import React, { memo, useCallback, useState } from 'react'
import useTranslation from '@/hooks/useTranslation'
import { Layout, Menu } from 'antd'
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import type { RenderIconInfo } from 'rc-menu/lib/interface'
import HeaderSidebar from './component/HeaderSideBar'
import { generateMenu } from './utils'
import CustomSidebar from './style'
import { useNavigate } from 'react-router-dom'

const { Sider } = Layout

const Sidebar: React.FC = () => {
  const navigate = useNavigate()

  const { t } = useTranslation('sideBar')

  const translator = (keyTranslate: string) => {
    return t(keyTranslate)
  }

  const generatedMenus = generateMenu(translator)

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const handleChangeTab = (path: string) => {
    navigate(path)
  }

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prevState) => !prevState)
  }, [])

  const renderExpandIcon = useCallback(
    (props: RenderIconInfo) =>
      props.isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />,
    []
  )

  return (
    <CustomSidebar>
      <Sider
        className='sidebar'
        //Set to null to hide the trigger to customize the toggle button
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <HeaderSidebar
          isCollapse={collapsed}
          toggleCollapsed={toggleCollapsed}
        />
        <Menu
          onClick={({ key }) => handleChangeTab(key)}
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
