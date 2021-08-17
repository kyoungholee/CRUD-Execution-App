import useApiCall from '../../hooks/useApiCall';

function ApiCall (){
    const [loading, payload, error ] = useApiCall(
        `${process.env.REACT_APP_API_SERVER}/api/board`
        `${process.env.REACT_APP_API_SERVER}/api/category`
        
    );

    if (loading === true) {
        return <div>로딩중입니다.</div>;
    }
    if (error !== null) {
        return <div>에러입니다. </div>;
    }
    return <div>{JSON.stringify(payload)}</div>

}
export default ApiCall;
