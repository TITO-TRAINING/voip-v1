import { memo, useCallback } from 'react'
import useTranslation from '@/hooks/useTranslation'

//component
import Button from '@/components/common/Button'
import Empty from '@/components/common/Empty'

//icon
import emptyImg from '@/assets/icons/Client.svg'
import { ReactComponent as AddCustomer } from '@/assets/icons/AddCustomer.svg'
import { ReactComponent as FileImport } from '@/assets/icons/FileImport.svg'

const EmptyCustomer = () => {
  const { t } = useTranslation('customer')
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
      <Empty emptyImg={emptyImg} content={t('desEmptyCustomer')}>
        <Button onClick={handleImport} className='import'>
          <FileImport />
          {t('addFiles')}
        </Button>
        <Button onClick={handleAddCustomer} className='add'>
          <AddCustomer />
          {t('addCustomer')}
        </Button>
      </Empty>
    </div>
  )
}
export default memo(EmptyCustomer)
