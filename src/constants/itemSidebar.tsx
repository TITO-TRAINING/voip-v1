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
import { PATH } from './path'

export const generateMenu = (translator: (keyTranslate: string) => string) => {
  return [
    getItem(translator('ticket'), PATH.TICKET, <Ticket />),
    getItem(translator('customer'), PATH.CUSTOMER, <ClientCustomer />),
    getItem(translator('contact'), PATH.CONTACTS, <Communicate />),
    getItem(translator('integrated'), PATH.INTEGRATE, <Integration />),
    getItem(translator('callCenter'), PATH.CALL_HISTORY, <Call />, [
      getItem(translator('callHistory'), PATH.CALL_HISTORY),
    ]),
    getItem(translator('employee'), PATH.STAFFS, <Employee />),
    getItem(translator('statistical'), PATH.STATISTICS, <Statistics />),
    getItem(translator('config'), PATH.SETTINGS, <Setting />),
  ]
}
