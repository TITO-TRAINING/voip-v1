import React, { memo, useCallback, useState } from 'react'
import useTranslation from '@/hooks/useTranslation'
import { Layout, Menu } from 'antd'
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import type { RenderIconInfo } from 'rc-menu/lib/interface'
import HeaderSidebar from './component/HeaderSideBar'
import getItem from './utils'
import CustomSidebar from './style'

// icons
import {
  ClientCustomer,
  Ticket,
  Communicate,
  Integration,
  Call,
  Statistics,
  Employee,
  Setting,
} from '@/components/modules/SideBar/component/Icons'

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

  const items = [
    getItem(t('ticket'), '1', <Ticket />),
    getItem(t('customer'), '2', <ClientCustomer />),
    getItem(t('contact'), '3', <Communicate />),
    getItem(t('integrated'), '4', <Integration />),
    getItem(t('callCenter'), 'sub1', <Call />, [
      getItem(t('callHistory'), '5'),
    ]),
    getItem(t('employee'), '6', <Employee />),
    getItem(t('statistical'), '7', <Statistics />),
    getItem(t('config'), '8', <Setting />),
  ]

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
          items={items}
          expandIcon={renderExpandIcon}
          className='menu-sidebar'
          inlineIndent={12}
        />
      </Sider>
    </CustomSidebar>
  )
}

export default memo(Sidebar)
