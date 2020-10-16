import React, { Fragment, useContext } from 'react';
import {Button, Select, InputNumber, Form} from 'antd';
import './style.css';
import {multiStepContext} from '../StepContext';
import DataRestaurant from '../data/dishes.json';



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
function Step3 (){
    const {setCurrent, data, setData} = useContext(multiStepContext)
    console.log(data);
    const [form] = Form.useForm();
    const Data2 = DataRestaurant.dishes;
    console.log(Data2);
    const newData = Data2.filter((item, index) => Data2.indexOf(item.restaurant) === index)
    console.log(newData);
    const onFinishs = () => {
        setCurrent(3) 
    }

    const handleChangeDish = (e) => {
        setData({...data, 'Dish': e })
    }
    const handleChangeNumberDish = (e) =>{
        setData({...data, 'numberDish': e})
    }

    return (
        <div className='body'>
        <div>
          
            <Form form={form}  name="nest-messages" onFinish={onFinishs} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'dish']} label="Please Select a Dish" rules={[{ required: true }]}>
                        <Select
                            labelInValue='meal'
                            placeholder='Please Select a Dish'
                            style={{ width: 400 }}
                            onChange={handleChangeDish}
                           
                        >
                            {Data2 ? Data2.map((item,index)=>(
                                <Fragment key={index}>
                                    {item.availableMeals.includes(data.meal.value) === true && item.restaurant === data.restaurant.value ? <Option key={index} value={item.name}>{item.name}</Option>:''}
                                </Fragment>
                            )):''}
                            
                        </Select>
                    </Form.Item>
                    <Form.Item name = {['user', 'servings']} label='Please enter no of servings' rules={[{ required: true , type: 'number',min: 1,max: 10,}]}>
                        <InputNumber  onChange={handleChangeNumberDish} min={1} max={10} ></InputNumber>
                    </Form.Item>
                    <Form.Item className="mt-3 " wrapperCol={{ span: 5, offset: 4 }}>
                        <Button type="primary" htmlType="submit">
                            Next
                        </Button>
                        <Button onClick={() => setCurrent(1)}>Previous</Button>
                    </Form.Item>

                </Form>
            
        </div>
        
    </div>
    )
}

export default Step3