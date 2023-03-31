import { useState } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import { Col, DatePicker, Form, Radio, Row, Select } from 'antd'
import { Gender } from '@/types/gender'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { ICustomer } from '@/types/Customer'
import { useTranslation } from 'react-i18next'

//icon
import { ReactComponent as AvatarGender } from '@/assets/icons/AvatarGender.svg'
import { ReactComponent as Calendar } from '@/assets/icons/Calendar.svg'
import { ReactComponent as Camera } from '@/assets/icons/Camera.svg'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

//style
import CustomAddCustomer from './styles'

//constants
import { OPTIONSELECT } from '@/constants/Customer'
import en from '@/services/i18n/locales/en'
import vi from '@/services/i18n/locales/vi'

interface AddCustomerProps {
  onClose: () => void
}
const AddCustomer: React.FC<AddCustomerProps> = ({ onClose }) => {
  const { t } = useTranslation('customer')
  console.log(en, vi)
  const { Option } = Select
  const [form] = Form.useForm()

  const handleClickCancel = () => {
    onClose()
    form.resetFields()
  }
  const handleSubmit = (values: ICustomer) => {
    // TODO: Implement handle submit
    console.log(values)
  }
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleSelectClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <CustomAddCustomer>
      <Form layout='vertical' form={form} onFinish={handleSubmit}>
        <div>
          <Row gutter={16}>
            <Col span={4}>
              <label htmlFor='add-avatar-customer'>
                <AvatarGender />
                <div className='add-camera-customer'>
                  <input id='add-avatar-customer' />
                  <Camera />
                </div>
              </label>
            </Col>
            <Col span={10}>
              <Form.Item
                name='name'
                label={t('addCustomers.fullName.label')}
                rules={[
                  {
                    required: true,
                    message: `${t('addCustomers.fullName.placeholder')}`,
                  },
                ]}
              >
                <Input placeholder={t('addCustomers.fullName.placeholder')} />
              </Form.Item>
            </Col>
            <Col span={10}>
              <div>
                <Form.Item
                  name='gender'
                  label={t('addCustomers.gender.title')}
                  rules={[
                    {
                      required: true,
                      message: `${t('addCustomers.gender.title')}`,
                    },
                  ]}
                >
                  <Radio.Group name='radiogroup'>
                    <Radio value={Gender.Male}>
                      {t('addCustomers.gender.male')}
                    </Radio>
                    <Radio value={Gender.Female}>
                      {t('addCustomers.gender.female')}
                    </Radio>
                    <Radio value={Gender.Other}>
                      {t('addCustomers.gender.other')}
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name='Date' label={t('addCustomers.birthday')}>
              <DatePicker suffixIcon={<Calendar />} format='DD/MM/YYYY' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='address' label={t('addCustomers.address.label')}>
              <Input placeholder={t('addCustomers.address.placeholder')} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='phone_number'
              label={t('addCustomers.phoneNumber.label')}
              rules={[
                {
                  required: true,
                  message: `${t('addCustomers.phoneNumber.placeholder')}`,
                },
              ]}
            >
              <Input placeholder={t('addCustomers.phoneNumber.placeholder')} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='email' label={t('addCustomers.email.label')}>
              <Input
                placeholder={t('addCustomers.email.placeholder')}
                type='email'
              />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='staff'
              label={t('addCustomers.employeeSupport.label')}
            >
              <Input
                placeholder={t('addCustomers.employeeSupport.placeholder')}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='demand' label={t('addCustomers.demand.label')}>
              <Select
                placeholder={t('addCustomers.demand.placeholder')}
                onClick={handleSelectClick}
                suffixIcon={
                  isClicked ? (
                    <CaretDownOutlined className='caret-down' />
                  ) : (
                    <CaretUpOutlined className='caret-up' />
                  )
                }
              >
                <Option value='test1'>{OPTIONSELECT}</Option>

                <Option value='test2'>{OPTIONSELECT}</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name='note' label={t('addCustomers.note.label')}>
              <TextArea
                rows={4}
                placeholder={`${t('addCustomers.phoneNumber.placeholder')}`}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className='footer'>
          <Button onClick={handleClickCancel} className='cancel'>
            {t('addCustomers.btn.cancel')}
          </Button>
          <Button onClick={() => form.submit()} className='add-customer'>
            {t('addCustomers.btn.submit')}
          </Button>
        </div>
      </Form>
    </CustomAddCustomer>
  )
}

export default AddCustomer
