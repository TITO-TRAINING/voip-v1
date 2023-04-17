import getItem from '@/components/modules/SideBar/utils'
import {
  Call,
  ClientCustomer,
  Communicate,
  Employee,
  Integration,
  Setting,
  Statistics,
  Ticket,
} from '@/components/modules/SideBar/component/Icons'

export const generateMenu = (translator: (keyTranslate: string) => string) => {
  return [
    getItem(translator('ticket'), '1', <Ticket />),
    getItem(translator('customer'), '2', <ClientCustomer />),
    getItem(translator('contact'), '3', <Communicate />),
    getItem(translator('integrated'), '4', <Integration />),
    getItem(translator('callCenter'), 'sub1', <Call />, [
      getItem(translator('callHistory'), '5'),
    ]),
    getItem(translator('employee'), '6', <Employee />),
    getItem(translator('statistical'), '7', <Statistics />),
    getItem(translator('config'), '8', <Setting />),
  ]
}