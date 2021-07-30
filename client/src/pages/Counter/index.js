import React, {useState} from 'react';

function Index() {
    const [button1Score, setButton1Score] = useState(10);
    const [button2Score, setButton2Score] = useState(20);

    const button1plus = () => {
        setButton1Score(button1Score + 1);
    };
    const button1minus = () => {
        setButton1Score(button1Score - 1);
    };
    const button2plus = () => {
        setButton2Score(button2Score + 1);
    };
    const button2minus = () => {
        setButton2Score(button2Score - 1);
    };
    
}


export default Index; 