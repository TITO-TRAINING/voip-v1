import React from 'react'
// import { useTranslation } from 'react-i18next'
import Input from '@/views/components/common/Input'
import TextArea from 'antd/lib/input/TextArea'
import Button from '@/views/components/common/Button'
import { Col, DatePicker, Form, Radio, Row, Select } from 'antd'
import {
  AvatarGender,
  Calendar,
  Camera,
  Vector,
} from '@/views/components/icons'
import CustomAddCustomer from './styles'

const AddCustomer: React.FC = () => {
  // const { t } = useTranslation('customer')
  const { Option } = Select
  const handleClickCancel = () => {
    // handle button Cancel
  }
  const handleAddCustomer = () => {
    // handle button addCustomer
  }
  return (
    <CustomAddCustomer>
      <Form layout='vertical'>
        <div className=''>
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
                label='Họ và tên'
                rules={[
                  {
                    required: true,
                    message: 'Nhập họ và tên',
                  },
                ]}
              >
                <Input placeholder='Nhập họ và tên' />
              </Form.Item>
            </Col>
            <Col span={10}>
              <div>
                <Form.Item
                  name='gender'
                  label='Giới tính'
                  rules={[
                    {
                      required: true,
                      message: 'Giới tính',
                    },
                  ]}
                >
                  <Radio.Group name='radiogroup'>
                    <Radio value={1}>Nam</Radio>
                    <Radio value={2}>Nữ</Radio>
                    <Radio value={3}>Khác</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name='Date' label='Ngày sinh'>
              <DatePicker suffixIcon={<Calendar />} placeholder='Ngày sinh' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='address' label='Địa chỉ'>
              <Input placeholder='Nhập địa chỉ' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name='phone_number'
              label='Số điện thoại'
              rules={[
                {
                  required: true,
                  message: 'Nhập số điện thoại',
                },
              ]}
            >
              <Input placeholder='Nhập số điện thoại' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='email' label='Email'>
              <Input placeholder='Nhập email' />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name='staff' label='Nhân viên phụ trách'>
              <Input placeholder='Nhân viên phụ trách' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name='demand' label='Nhu cầu'>
              <Select placeholder='Nhu cầu' suffixIcon={<Vector />}>
                <Option value='test1'>test</Option>

                <Option value='test2'>test</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name='note' label='Ghi chú'>
              <TextArea rows={4} placeholder='Nhập ghi chú' />
            </Form.Item>
          </Col>
        </Row>
        <div className='footer'>
          <Button onClick={handleClickCancel} className='cancel'>
            Huỷ
          </Button>
          <Button onClick={handleAddCustomer} className='add-customer'>
            Thêm khách hàng
          </Button>
        </div>
      </Form>
    </CustomAddCustomer>
  )
}

export default AddCustomer
