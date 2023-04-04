import { useState } from 'react'
import useTranslation from '@/hooks/useTranslation'
import TextArea from 'antd/lib/input/TextArea'
import { Col, DatePicker, Form, Radio, Row, Select } from 'antd'
import { Gender } from '@/types/gender'
import { ICustomer } from '@/types/Customer'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

//constants
import { formatDate } from '@/constants/common'
import { Demand } from '@/constants/customer'

//icon
import { ReactComponent as AvatarGender } from '@/assets/icons/AvatarGender.svg'
import { ReactComponent as Calendar } from '@/assets/icons/Calendar.svg'
import { ReactComponent as Camera } from '@/assets/icons/Camera.svg'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

//style
import CustomAddCustomer from './styles'

interface AddCustomerProps {
  onClose: () => void
}

const AddCustomer: React.FC<AddCustomerProps> = ({ onClose }) => {
  const { t } = useTranslation('customer', 'addCustomers')
  const [isClicked, setIsClicked] = useState<boolean>(false)
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
                label={t('fullName.label')}
                rules={[
                  {
                    required: true,
                    message: `${t('fullName.placeholder')}`,
                  },
                ]}
              >
                <Input placeholder={t('fullName.placeholder')} />
              </Form.Item>
            </Col>
            <Col span={10}>
              <div>
                <Form.Item
                  name='gender'
                  label={t('gender.title')}
                  rules={[
                    {
                      required: true,
                      message: `${t('gender.title')}`,
                    },
                  ]}
                >
                  <Radio.Group name='radiogroup'>
                    <Radio value={Gender.Male}>{t('gender.male')}</Radio>
                    <Radio value={Gender.Female}>{t('gender.female')}</Radio>
                    <Radio value={Gender.Other}>{t('gender.other')}</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name='Date' label={t('birthday')}>
              <DatePicker
                suffixIcon={<Calendar />}
                format={formatDate}
                inputReadOnly
                placeholder='ngày sinh'
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='address' label={t('address.label')}>
              <Input placeholder={t('address.placeholder')} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='phone_number'
              label={t('phoneNumber.label')}
              rules={[
                {
                  required: true,
                  message: `${t('phoneNumber.placeholder')}`,
                },
              ]}
            >
              <Input placeholder={t('phoneNumber.placeholder')} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='email' label={t('email.label')}>
              <Input placeholder={t('email.placeholder')} type='email' />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name='staff' label={t('employeeSupport.label')}>
              <Input placeholder={t('employeeSupport.placeholder')} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='demand' label={t('demand.label')}>
              <Select
                placeholder={t('demand.placeholder')}
                onClick={handleSelectClick}
                suffixIcon={
                  isClicked ? (
                    <CaretDownOutlined className='caret-down' />
                  ) : (
                    <CaretUpOutlined className='caret-up' />
                  )
                }
              >
                <Option value='test1'>{Demand}</Option>

                <Option value='test2'>{Demand}</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name='note' label={t('note.label')}>
              <TextArea
                rows={4}
                placeholder={`${t('phoneNumber.placeholder')}`}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className='footer'>
          <Button onClick={handleClickCancel} className='cancel'>
            {t('btn.cancel')}
          </Button>
          <Button onClick={() => form.submit()} className='add-customer'>
            {t('btn.submit')}
          </Button>
        </div>
      </Form>
    </CustomAddCustomer>
  )
}

export default AddCustomer
