import React, { useContext, useState } from 'react';
import './App.css';
import Step1 from '../src/component/step1';
import Step2 from '../src/component/step2';
import Step3 from '../src/component/step3';
import Review from '../src/component/review';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
import {multiStepContext} from './StepContext';
const { Step } = Steps;


function App() {
  const {current, finalData} = useContext(multiStepContext);
  
  const showStep = (current) => {
    switch(current){
      case 0: 
        return <Step1 />
      case 1:
        return <Step2 />
      case 2:
        return <Step3 />
      case 3:
        return <Review />
    }
  }
  
  return (
    <div className="App">
      <h2>ReactJS Step Application</h2>
      <div className='content-stepper'>
      
        <Steps
          type="navigation"
          current={current}
          className="site-navigation-steps"
          initial={0}
          style={{width:600, marginLeft:400}}
        >
          <Step status={current-1} title="Step1" />
          <Step status={current-2} title="Step2" />
          <Step status={current-3} title="Step3" />
          <Step status={current-4} title="Review" />
        </Steps>
        
      </div>
      {showStep(current)}
      
    </div>
  );
}

export default App;
