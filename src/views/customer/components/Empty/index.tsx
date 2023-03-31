import { memo, useCallback } from 'react'
//component
import Button from '@/components/common/Button'
import Empty from '@/components/common/Empty'
//constants
import { Customer } from '@/constants/Customer'
//icon
import emptyImg from '@/assets/icons/Client.svg'
import { ReactComponent as AddCustomer } from '@/assets/icons/AddCustomer.svg'
import { ReactComponent as FileImport } from '@/assets/icons/FileImport.svg'

const EmptyCustomer = () => {
  const handleImport = useCallback(() => {
    //TODO: Implement handle Import excel button
    console.log('import')
  }, [])

  const handleAddCustomer = useCallback(() => {
    //TODO: Implement handle addCustomer button
    console.log('add')
  }, [])

  return (
    <div>
      <Empty emptyImg={emptyImg} content={Customer.desEmptyCustomer}>
        <Button onClick={handleImport} className='import'>
          <FileImport />
          {Customer.addFiles}
        </Button>
        <Button onClick={handleAddCustomer} className='add'>
          <AddCustomer />
          {Customer.addCustomer}
        </Button>
      </Empty>
    </div>
  )
}
export default memo(EmptyCustomer)
