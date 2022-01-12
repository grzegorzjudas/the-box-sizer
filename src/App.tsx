import React, { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';

import Calculator from './components/Calculator';
import SetupDrawer from './components/Drawer';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(2)
    }
}));

export function App() {
    const classes = useStyles();

    const [ drawerOpen, setDrawerOpen ] = useState(true);
    const [ maxSum, setMaxSum ] = useState(0);
    const [ maxLength, setMaxLength ] = useState(0);

    function onMaxDimensionsChange (sum: number, length: number) {
        setMaxSum(sum);
        setMaxLength(length);

        setDrawerOpen(false);
    }

    function openDrawer () {
        setDrawerOpen(true);
    }

    return (
        <>
            <h1>THE BOX-SIZER</h1>
            <Calculator
                maxSum={maxSum} 
                maxLength={maxLength}
            />
            <Button variant="contained" color="primary" onClick={openDrawer} className={classes.button}>Change max sizes</Button>
            <SetupDrawer
                show={drawerOpen}
                defaultMaxSum={maxSum}
                defaultMaxLength={maxLength}
                onMaxDimensionsChange={onMaxDimensionsChange}
            />
        </>
    );
}

export default App;
