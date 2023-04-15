import { IDepartment, IStateDepartment } from '@/types/department'

export const DATA_DEPARTMENT: IDepartment = {
  id: 1,
  name: 'Nhóm kinh doanh 1',
  createAt: '22-03-2022',
  members: [
    {
      id: 1,
      name: 'Pham Nhu Quoc Bao',
      gender: 'Nam',
    },
    {
      id: 2,
      name: 'Vo Tuan Kiet',
      gender: 'Nam',
    },
    {
      id: 3,
      name: 'Bich Tram',
      gender: 'Nu',
    },
    {
      id: 4,
      name: "Nguyen Tan Bao",
      gender: "Nam"
    },
    {
      id: 5,
      name: "Truong Dang Hoan",
      gender: "Nam"
    }
  ],
}

export const STATE_DEPARTMENT: IStateDepartment = {
  active: 'active',
  deActive: 'de-active',
}
