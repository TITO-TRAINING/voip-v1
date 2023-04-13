import React, { memo, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTranslation from '@/hooks/useTranslation'
import { Layout, Menu } from 'antd'
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons'
import type { RenderIconInfo } from 'rc-menu/lib/interface'
import HeaderSidebar from './component/HeaderSideBar'
import { PATH } from '@/constants/path'
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
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState<boolean>(false)

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prevState) => !prevState)
  }, [])

  const renderExpandIcon = useCallback(
    (props: RenderIconInfo) =>
      props.isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />,
    []
  )

  const handleChangeTab = (path: string) => {
    navigate(path)
  }

  const { t } = useTranslation('sideBar')

  const items = [
    getItem(t('ticket'), PATH.TICKET, <Ticket />),
    getItem(t('customer'), PATH.CUSTOMER, <ClientCustomer />),
    getItem(t('contact'), PATH.CONTACTS, <Communicate />),
    getItem(t('integrated'), PATH.INTEGRATE, <Integration />),
    getItem(t('callCenter'), PATH.CALL_HISTORY, <Call />, [
      getItem(t('callHistory'), PATH.CALL_HISTORY),
    ]),
    getItem(t('employee'), PATH.STAFFS, <Employee />),
    getItem(t('statistical'), PATH.STATISTICS, <Statistics />),
    getItem(t('config'), PATH.SETTINGS, <Setting />),
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
          onClick={({ key }) => handleChangeTab(key)}
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
