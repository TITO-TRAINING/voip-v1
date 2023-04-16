import React from 'react'
import type { MenuProps } from 'antd'
import { PATH } from '@/constants/path'
import {
  Call,
  ClientCustomer,
  Communicate,
  Employee,
  Integration,
  Setting,
  Statistics,
  Ticket,
} from '../component/Icons'

type MenuItem = Required<MenuProps>['items'][number]

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => ({
  key,
  icon,
  children,
  label,
})

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
