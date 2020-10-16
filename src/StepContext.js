import React, { useState } from 'react';
import App from './App';

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [current , setCurrent] = useState(0);
    const [data , setData] = useState({meal: '',numberPeople: ''});
    const [finalData , setFinalData] = useState([])

    function submitData (){
        setFinalData(finalData=>[...finalData, data]);
        setData('');
        setCurrent(0)
    }
    return(
        <div>
            <multiStepContext.Provider value={{current, setCurrent, data, setData, finalData, setFinalData, submitData}} >
                <App />
            </multiStepContext.Provider>
        </div>
    )

}

export default StepContext