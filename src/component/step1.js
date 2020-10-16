import React, { useContext, useEffect, useState } from 'react';
import {Button, Select, InputNumber,Form} from 'antd';
import './style.css';
import {multiStepContext} from '../StepContext';

const {Option}=Select
const validateMessages = {
    required: 'Value is not null',
    types: {
        'date': 'Value is not validate date!',
        'number': 'Value is not a validate number!',
    },
    number: {
        'range': 'Value must be between 0 and 10',
    },
};
export default function Step1 () {
    const {setCurrent, data, setData} = useContext(multiStepContext);
    const [form] = Form.useForm();
    useEffect(() => {
       form.setFieldsValue({ user: data })
    }, [data,form])  
    const handleChangeMeal = (e) => {
        setData({...data,meal: e})
    }
    const handleChangeNumber = (e) =>{
        setData({...data,numberPeople: e})
    }
    const onFinish = (e) => {
        setCurrent(1)
    }
    return(
        <div className='body'>
            <div>
                <Form  form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'meal']} label="Please Select a meal" rules={[{ required: true }]}>
                    <Select
                        labelInValue='meal'
                        placeholder='Select a meal'
                        style={{width:400}}
                        onChange={handleChangeMeal}
                        >
                        <Option value='breakfast'>breakfast</Option>
                        <Option value='lunch'>lunch</Option>
                        <Option value='dinner'>dinner</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item name={['user', 'numberPeople']} label="Please Enter Number of people" rules={[{ required: true , type: 'number',min: 1,max: 10,}]}>
                    <InputNumber 
                        labelInValue='numberPeople' 
                        min={1} 
                        max={10} 
                        onChange={handleChangeNumber}>
                    </InputNumber>
                    </Form.Item>
                    <Form.Item className="mt-3 " wrapperCol={{span: 5, offset: 0 }}>
                        <Button type="primary" htmlType="submit">
                            Next
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
