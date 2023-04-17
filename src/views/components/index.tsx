import React from 'react'
import Department from '@/components/common/Department'
import { DATA_DEPARTMENT } from '@/constants/department'
import { STATE_DEPARTMENT } from '@/constants/department'

const Components = () => {
  return (
    <div>
      <Department department={DATA_DEPARTMENT} state={STATE_DEPARTMENT.deActive} onOK={undefined}/>
    </div>
  )
}

export default Components
