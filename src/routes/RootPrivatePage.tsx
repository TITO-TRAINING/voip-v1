import Sidebar from '@/components/modules/SideBar'
import { Outlet } from 'react-router-dom'
import RootPageCustom from './style'

const RootPrivatePage = () => {
  return (
    <RootPageCustom>
      <div className='container'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='content'>
          <Outlet />
        </div>
      </div>
    </RootPageCustom>
  )
}

export default RootPrivatePage
