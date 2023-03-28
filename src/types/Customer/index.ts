import { Gender } from '../gender/gender'

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
