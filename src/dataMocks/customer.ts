//type
import { ICustomer } from '@/types/Customer'
import { ColumnProps, ColumnsType } from 'antd/es/table'

export const columns: ColumnProps<ColumnsType>[] = [
  {
    key: 'id',
    title: 'stt',
    dataIndex: 'id',
    width: '5%',
  },
  {
    key: 'name',
    title: 'name',
    dataIndex: 'name',
    width: '25%',
  },
  {
    key: 'phoneNumber',
    title: 'phoneNumber',
    dataIndex: 'phoneNumber',
    width: '15%',
  },
  {
    key: 'staff',
    title: 'employeeSupport',
    dataIndex: 'staff',
    width: '20%',
  },
  {
    key: 'demand',
    title: 'demand',
    dataIndex: 'demand',
    width: '15%',
  },
  {
    key: 'createdAt',
    title: 'createdAt',
    dataIndex: 'createdAt',
    width: '15%',
  },
  {
    key: 'nullColums',
    title: '',
    dataIndex: 'nullColums',
    width: '5%',
  },
]

export const data: ICustomer[] = [
  {
    id: 1,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 2,
    name: 'Nguyễn Văn thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 3,
    name: 'Nguyễn Thị Nga',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 4,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 5,
    name: 'Phạm Thị Hiền',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 6,
    name: 'Phạm Thị Hiền',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 7,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 8,
    name: 'Phạm Thị Hiền',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 9,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
  {
    id: 10,
    name: 'Nguyễn Văn Thiện',
    phoneNumber: '0123456789',
    staff: 'Thanh Pham',
    demand: 'Tu van',
    createdAt: '21-09-2022',
  },
]
