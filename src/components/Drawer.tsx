import React, { useState } from 'react';
import '../style.css';
import { Drawer, Button, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    button: {
        background: 'linear-gradient(45deg, orange 30%, teal 90%)',
        marginTop: '80px',
    },
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 20
    },
    span: {
        marginTop: '10px',
    }
});

type Props = {
    measurementSum: number,
    maxLength: number,
    setMeasurementSum: React.Dispatch<React.SetStateAction<number>>,
    setMaxLength: React.Dispatch<React.SetStateAction<number>>,
    setLength: React.Dispatch<React.SetStateAction<number>>,
    setWidth: React.Dispatch<React.SetStateAction<number>>,
    setHeight: React.Dispatch<React.SetStateAction<number>>
};

export function SetupDrawer(props: Props) {

    const classes = useStyles();
    const measurementSum = props.measurementSum;
    const maxLength = props.maxLength;
    const setMeasurementSum = props.setMeasurementSum;
    const setMaxLength = props.setMaxLength;
    const setLength = props.setLength;
    const setWidth = props.setWidth;
    const setHeight = props.setHeight;

    const [ menuOpen, setMenuOpen ] = useState(true);

    function toggleMenu () {
        if (maxLength == 0 || measurementSum == 0) {
            alert('Please enter values for max sum and max length');
        }
        else {
            setMenuOpen(!menuOpen);
        }
    }

    function preventClose (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
    }

    function handleMeasurementSum(e: React.ChangeEvent<HTMLInputElement>) {

        const parsed = parseInt(e.target.value);
        const newSum = Math.floor(parsed);

        setMeasurementSum(newSum);
        setLength(Math.floor(newSum / 5));
        setWidth(Math.floor(newSum / 5));
        setHeight(Math.floor(newSum / 5));
        setMaxLength(Math.floor(newSum / 2));

        if(newSum <= 0) {
            setMeasurementSum(0);
        }
    }

    function handleMaxLength(e: React.ChangeEvent<HTMLInputElement>) {
    
        const parsed = parseInt(e.target.value);
        const newMaxLength = Math.floor(parsed);

        setMaxLength(newMaxLength);
        if(newMaxLength > measurementSum - 4) {
            alert("The max length can't exceed the max sum - 4");
            setMaxLength(measurementSum - 4);
        }
        if(newMaxLength <= 0) {
            setMaxLength(0);
        }
    }

    return (
        <div>
            <Button className={classes.button} onClick={toggleMenu}>Chnage max values</Button>
            <Backdrop className={classes.backdrop} open={menuOpen} onClick={toggleMenu} >
                <Drawer variant="persistent" anchor="bottom" open={menuOpen} onClick={preventClose}>
                    <span className={classes.span}> Before You go further, please enter the maximal sum of length and the circumference measured perpendicular to the length</span>
                    <span>and the maximal length allowed by the courier of Your choice.</span>
                    <span className={classes.span}> max sum</span>
                    <input type="number" min='1' onChange={handleMeasurementSum} value={measurementSum}/>
                    <span>max length</span>
                    <input type="number" min='1' max={measurementSum -4} onChange={handleMaxLength} value={maxLength}/>
                </Drawer>
            </Backdrop>
        </div>
    );
}

export default SetupDrawer;
