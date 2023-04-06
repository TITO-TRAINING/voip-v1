import React from 'react'
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons'
import { Col, Row, Typography } from 'antd'
import CustomHeaderSidebar from './style'
import Button from '@/components/common/Button'
import Logo from '@/assets/images/logoSideBar.png'
import { company } from '@/constants/common'

const { Text } = Typography

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
          {!isCollapse && <Text>{company}</Text>}
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
export default HeaderSidebar
