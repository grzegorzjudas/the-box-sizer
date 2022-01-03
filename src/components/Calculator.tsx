import React from 'react';
import '../style.css';
import { Slider } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    slider: {
        width: 300,
        margin: 'auto'
    },
});

type Props = {
    measurementSum: number,
    maxLength: number,
    length: number,
    width: number,
    height: number,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    setWidth: React.Dispatch<React.SetStateAction<number>>,
    setHeight: React.Dispatch<React.SetStateAction<number>>,
}

export function Calculator(props: Props) {

    const classes = useStyles();
    const measurementSum = props.measurementSum;
    const maxLength = props.maxLength;
    const length = props.length;
    const width = props.width;
    const height = props.height;
    const setLength = props.setLength;
    const setWidth = props.setWidth;
    const setHeight = props.setHeight;

    function handleLengthChange(e: any, newValue: number | number[]) {
    
        const newLength = newValue as number;

        setLength(newLength);
        setWidth(Math.floor((measurementSum - newLength) / 4));
        setHeight(Math.floor((measurementSum - newLength) / 4));

        if(newLength <= width || newLength <= height) {
            setLength(Math.floor(measurementSum / 5));
            setWidth(Math.floor(measurementSum / 5));
            setHeight(Math.floor(measurementSum / 5));
        }
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    function handleWidthHeightChange(e: React.ChangeEvent<{}>, newValue: number | number[]) {

        const newWidth = newValue as number;
        const newHeight = Math.floor((measurementSum - length - (newWidth * 2)) / 2);

        setWidth(newWidth);
        setHeight(newHeight);

        if(newHeight <= 1 || width - newWidth <= -2) {
            setHeight(1);
            setWidth(Math.floor(measurementSum - length - 2) / 2); 
        }   
    }

    return (
        <div>
            <div className='app'>
                <div className={classes.slider}>
                    <span>length: {length ? length : 0}</span>
                    <Slider
                        defaultValue={0}
                        value={length}
                        step={1}
                        marks
                        min={1}
                        max={maxLength * 1}
                        onChange={handleLengthChange}
                    />
                </div>
                <div className={classes.slider}>
                    <span>width: {width ? width : 0}</span>
                    <Slider
                        defaultValue={0}
                        value={width}
                        step={1}
                        marks
                        min={1}
                        max={length}
                        onChange={handleWidthHeightChange}
                    />
                </div>
                <span>height: {height ? height : 0}</span>
            </div>
        </div>
    );
}

export default Calculator;
