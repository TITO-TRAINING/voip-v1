import React, { memo } from 'react'
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { company } from '@/constants/common'
import Button from '@/components/common/Button'
import CustomHeaderSidebar from './style'
import Logo from '@/assets/images/logoSideBar.png'

interface HeaderSidebarProps {
  toggleCollapsed: () => void
  isCollapse: boolean
}

const HeaderSidebar: React.FC<HeaderSidebarProps> = ({
  isCollapse,
  toggleCollapsed,
}) => {
  return (
    <CustomHeaderSidebar>
      <Row className={isCollapse ? 'header-sidebar logo' : 'header-sidebar'}>
        <Col span={16} className='sidebar-logo'>
          <img className='logo-image' src={Logo} alt='logo' />
          {!isCollapse && <p className='header-sidebar-title'>{company}</p>}
        </Col>
        <Col span={8} className='sidebar-button-collapsed'>
          <Button onClick={toggleCollapsed}>
            {isCollapse ? (
              <RightCircleOutlined className='icon-right-circle-outline icon' />
            ) : (
              <LeftCircleOutlined className='icon-left-circle-outline icon' />
            )}
          </Button>
        </Col>
      </Row>
    </CustomHeaderSidebar>
  )
}
export default memo(HeaderSidebar)
