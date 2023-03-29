import { Gender } from './gender'

export interface ICustomer {
  id: number
  name: string
  phone_number: string
  gender: Gender
  email?: string
  address?: string
  demand?: string
  avatar?: string
  note?: string
  created_at: string
  staff?: string
}
