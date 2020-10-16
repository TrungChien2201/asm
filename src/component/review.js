import React, { useContext } from 'react';
import './style.css';
import { List, Typography, Divider, Button } from 'antd';
import {multiStepContext} from '../StepContext';


function Review (){
    const {data, finalData, setFinalData, setCurrent, setData, submitData} = useContext(multiStepContext);
    return (
        <div className='body'>
            <div>
                <div>
                    <h4>Meal</h4>
                </div>
                <div>
                    <h4>No of People</h4>
                </div>
                <div>
                    <h4>Restaurant</h4>
                </div>
            </div>
            <Divider orientation="left">List</Divider>
            {/* <List
                size="small"
                grid={{gutter:16, column:2}}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            /> */}
            <div className='btn'>
                <div className='button1'>
                    <Button onClick={()=> setCurrent(2)} >Previous</Button>
                </div>
                <div className='button2'>
                    <Button type='submit' onClick={submitData} >Submit</Button>
                </div>
           </div>
        </div>
    )
}

export default Review