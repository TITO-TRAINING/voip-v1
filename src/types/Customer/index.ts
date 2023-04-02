import { Gender } from '@/types/gender'

export interface ICustomer {
  id: number
  name: string
  phoneNumber: string
  gender?: Gender
  email?: string
  dob?: string
  address?: string
  demand?: string
  avatar?: string
  note?: string
  createdAt: string
  staff?: string
}

export interface dataCustomerCall {
  name: string
  avatar?: string
  phoneNumber: string
}
