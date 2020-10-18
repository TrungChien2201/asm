import React, { Fragment, useContext, useEffect } from 'react';
import { Button, Select, Form, Input } from 'antd';
import './style.css';
import { multiStepContext } from '../StepContext';
import DataRestaurants from '../data/dishes.json';


const { Option } = Select
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
function Step2() {
    const { setCurrent, data, setData } = useContext(multiStepContext);
    console.log(data);
    const [form] = Form.useForm();
    let DataRestaurant = DataRestaurants.dishes;
    let newDataRestaurant = [];
    let dataNew = [];
    newDataRestaurant = DataRestaurant.map((item) => item.restaurant);
   
    newDataRestaurant = newDataRestaurant.filter((item,index) =>{
    return  newDataRestaurant.indexOf(item) === index;
  });
    console.log(newDataRestaurant);

    const onFinishs = () => {
        setCurrent(2)
    }
    useEffect(() => {
        form.setFieldsValue({ user: data })
       
    }, [data, form])
    const handleChangeRestaurant = (e) => {
        setData({ ...data, restaurant: e })
    }
    return (
        <div className='body'>

            <div>
                <Form form={form} name="nest-messages" onFinish={onFinishs} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'restaurant']} label="Name" rules={[{ required: true }]}>
                        <Select
                            labelInValue='meal'
                            placeholder='Select a meal'
                            style={{ width: 400 }}
                            onChange={handleChangeRestaurant}
                            value={data.Restaurant}
                        >
                            {newDataRestaurant ? newDataRestaurant.map((item, index) => (
                                <Fragment key={index}>
                                    {newDataRestaurant.includes(data.meal.value)===true?<Option key={index} value={item}>{item}</Option>:''}
                                </Fragment>
                            )) : ''}

                        </Select>
                    </Form.Item>
                    <Form.Item className="mt-3 " wrapperCol={{ span: 5, offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                            Next
                        </Button>
                        <Button onClick={() => setCurrent(0)}>Previous</Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

export default Step2