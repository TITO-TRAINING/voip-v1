export interface IDataCustomer {
    id: number,
    name: string,
    gender: string
    avatar?: string
}

export interface IDepartment {
    id: number
    name: string,
    createAt: string,
    members: IDataCustomer[]
}

export interface IStateDepartment {
    active: string,
    deActive: string,
}
