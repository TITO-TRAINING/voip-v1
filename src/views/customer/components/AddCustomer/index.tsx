import { useState } from 'react'
import TextArea from 'antd/lib/input/TextArea'
import { Col, DatePicker, Form, Radio, Row, Select } from 'antd'
import { Gender } from '@/types/gender'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { ICustomer } from '@/types/customer'

//icon
import { ReactComponent as AvatarGender } from '@/assets/icons/AvatarGender.svg'
import { ReactComponent as Calendar } from '@/assets/icons/Calendar.svg'
import { ReactComponent as Camera } from '@/assets/icons/Camera.svg'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'

//style
import CustomAddCustomer from './styles'

//constants
import {
  address,
  birthday,
  btn,
  demand,
  email,
  employeeSupport,
  fullName,
  gender,
  note,
  OPTIONSELECT,
  phoneNumber,
} from '@/constants/Customer'

interface AddCustomerProps {
  onClose: () => void
}
const AddCustomer: React.FC<AddCustomerProps> = ({ onClose }) => {
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
                label={fullName.label}
                rules={[
                  {
                    required: true,
                    message: fullName.placeholder,
                  },
                ]}
              >
                <Input placeholder={fullName.placeholder} />
              </Form.Item>
            </Col>
            <Col span={10}>
              <div>
                <Form.Item
                  name='gender'
                  label={gender.title}
                  rules={[
                    {
                      required: true,
                      message: gender.male,
                    },
                  ]}
                >
                  <Radio.Group name='radiogroup'>
                    <Radio value={Gender.Male}>{gender.male}</Radio>
                    <Radio value={Gender.Female}>{gender.female}</Radio>
                    <Radio value={Gender.Other}>{gender.other}</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name='Date' label={birthday}>
              <DatePicker suffixIcon={<Calendar />} placeholder={birthday} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='address' label={address.label}>
              <Input placeholder={address.placeholder} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='phone_number'
              label={phoneNumber.label}
              rules={[
                {
                  required: true,
                  message: phoneNumber.placeholder,
                },
              ]}
            >
              <Input placeholder={phoneNumber.placeholder} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='email' label={email.label}>
              <Input placeholder={email.placeholder} type='email' />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name='staff' label={employeeSupport.label}>
              <Input placeholder={employeeSupport.placeholder} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='demand' label={demand.label}>
              <Select
                placeholder={demand.placeholder}
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
            <Form.Item name='note' label={note.label}>
              <TextArea rows={4} placeholder={note.placeholder} />
            </Form.Item>
          </Col>
        </Row>
        <div className='footer'>
          <Button onClick={handleClickCancel} className='cancel'>
            {btn.cancel}
          </Button>
          <Button onClick={() => form.submit()} className='add-customer'>
            {btn.submit}
          </Button>
        </div>
      </Form>
    </CustomAddCustomer>
  )
}

export default AddCustomer
