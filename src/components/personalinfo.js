import React from 'react'
import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'


function personalinfo() {
  return (
    <div>
        <div className="row">
            <div className="col-md-4">
                <Form.Item name='firstName' 
                label='FirstName' 
                rules={[{required:true}]}
                >
                    <Input />
                </Form.Item>
            </div>
            <div className="col-md-4">
                <Form.Item name='lastName' 
                label='LastName'
                >
                    <Input />
                </Form.Item>
            </div>
            <div className="col-md-4">
                <Form.Item name='email' 
                label='Email'
                >
                    <Input />
                </Form.Item>
            </div>
            <div className="col-md-4">
                <Form.Item name='mobilenumber' 
                label='Mobile Number' 
                rules={[{required:true}]}
                >
                    <Input />
                </Form.Item>
            </div>
            <div className="col-md-4">
                <Form.Item name='portfolio' 
                label='Portfolio' 
                rules={[{required:true}]}
                >
                    <Input />
                </Form.Item>
            </div>
            <div className="col-md-12">
            <Form.Item name='carrierobjective' 
            label='Carrier Objective' 
            rules={[{required:true}]}
            >
                    <TextArea />
                </Form.Item>
            </div>
            <div className="col-md-12">
            <Form.Item name='address' 
                       label='Address' 
                       rules={[{required:true}]}
            >
                    <TextArea />
                </Form.Item>
            </div>
        </div>
    </div>
  )
}

export default personalinfo