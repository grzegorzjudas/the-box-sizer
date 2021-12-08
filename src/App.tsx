import React, { useState } from 'react';
import './style.css';
import Calculator from './components/Calculator';
import SetupDrawer from './components/Drawer';

export function App() {

    const [ measurementSum, setMeasurementSum ] = useState(0);
    const [ maxLength, setMaxLength ] = useState(0);
    const [ length, setLength ] = useState(1);
    const [ width, setWidth ] = useState(1);
    const [ height, setHeight ] = useState(1);

    return (
        <div className='app'>
            <h1>THE BOX-SIZER</h1>
            <Calculator 
                measurementSum = {measurementSum} 
                maxLength = {maxLength}
                length = {length}
                width = {width}
                height = {height}
                setLength = {setLength}
                setWidth = {setWidth}
                setHeight = {setHeight}
            />
            <SetupDrawer
                measurementSum = {measurementSum}
                maxLength = {maxLength}
                setMeasurementSum = {setMeasurementSum}
                setMaxLength = {setMaxLength}
                setLength = {setLength}
                setWidth = {setWidth}
                setHeight = {setHeight}
            />
        </div>
    );
}

export default App;
