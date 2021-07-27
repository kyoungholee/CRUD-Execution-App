import { useRef, useContext, useState } from "react";
import axios from 'axios';
import {UserContext} from '../../App';
import { useHistory } from "react-router";


function Signinup ({isSignin}) {
    const {dispatch} = useContext(UserContext);
    const history = useHistory();
    const usernameRef = useRef('');
    const passwordRef = useRef('');
    const locationRef = useRef('');
    const [errorMsg, setErrorMsg] = useState(null);

    const title = isSignin ? '로그인' : '로그인이 되지 않음';

    const clickLoginBtnHandler = async() => {
        if(isSignin) {
            try {
                const userInfo = await axios.post(
                    `${process.env.REACT_APP_API_SERVER}/api/auth/login`,
                    {
                        username : usernameRef.current.value,
                        password : passwordRef.current.value,
                    }
                );
                dispatch({type : 'signin', payload : userInfo.data.user});
                setErrorMsg(null);
                history.push('/');
            } catch(error) {
                setErrorMsg(error.response.data.message);
                console.log("에러임다");
            }
        } else {
            try {
                const userInfo = await axios.post(
                    `${process.env.REACT_APP_API_SERVER}/api/auth`,
                    {
                        username : usernameRef.current.value,
                        password : passwordRef.current.value,
                        location : locationRef.current.value,
                    }
                );
                dispatch({ type : 'signin', payload: userInfo.data.user});
                history.push('/');
                setErrorMsg(null);
            } catch(error) {
                setErrorMsg(e.response.data.message);
                console.log("에러닷");
            }
        }
    };
    return (
        <div>
            
        </div>
    )


}