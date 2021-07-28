import {useState, useEffect} from "react";
import axios from 'axios';

//api를 받아 올때 사용된다.
function useApiCall(url) {
    const [loading, setLoading] = useState(false);
    const [payload, setPayload] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await axios.get(url);
            setPayload(response.data);
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [url]);
    return [loading, payload, error, ]

}



export default  useApiCall;