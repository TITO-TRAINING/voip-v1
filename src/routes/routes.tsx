import { RouteObject } from 'react-router-dom'
import RootPrivatePage from './RootPrivatePage'
import Components from '@/views/components'
import Dashboard from '@/views/dashboard'
import Empty from '@/views/customer/components/Empty'
import AddCustomer from '@/views/customer/components/AddCustomer'

const onClose = () => {
  // TODO: Implement handle onClose
  console.log('onClose')
}

export const routes = (): RouteObject[] => [
  {
    path: '/',
    element: <Dashboard />,
  },

  {
    path: 'components',
    element: <Components />,
  },

  {
    path: '/',
    element: <RootPrivatePage />,
    children: [
      {
        path: 'tickets',
        element: (
          //TODO: add tickets page
          <AddCustomer onClose={onClose} />
          // test component
        ),
      },
      {
        path: 'customers',
        element: (
          //test component
          <Empty />
        ),
      },
      {
        path: 'contacts',
        // element:
        // TODO: add contacts page,
      },
      {
        path: 'integrate',
        // element:
        // TODO: add integrate page,
      },
      {
        path: 'switchboard',
        // element:
        // TODO: add switchboard page,
      },
      {
        path: 'staffs',
        // element:
        // TODO: add staffs page,
      },
      {
        path: 'statistics',
        // element:
        // TODO: add statistics page,
      },
      {
        path: 'settings',
        // element:
        // TODO: add settings page,
      },
    ],
  },
]
