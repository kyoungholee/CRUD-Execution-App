import Board from '../../components/Board';
import Write from '../../components/Write';
import Detail from '../../components/Detail';


import {useState} from 'react';
import useApiCall from '../../hooks/useApiCall';
import {Route, useHistory, useLocation} from 'react-router-dom';


function Main () {
    const history = useHistory();
    const location = useLocation();
    const [loading , testData , error, fetchData] = useApiCall( 
        `${process.env.REACT_APP_API_SERVER}/api/board`
    );

        //값이 보이지 않게 해준다. 
    const [visible, setVisible] = useState(false);

    if (!testData) {
        return <></>;
    }

    if (loading) {
        return <>로딩중 ~ </>;
    }

    if(error) {
        return <> 에러입니다. : {error} </>;
    }

    const BoardComponents = testData.map((boardData) => {
        return (
            <Board 
                key = {boardData._id}
                title = {boardData.title}
                category = {boardData.category}
                time = {boardData.time}
                price = {boardData.price}
                user = {boardData.user}
                setBoardData = {() => {
                    history.push(`/board/${boardData._id}`);
                }}
                />
        );
    });

    const id = location.pathname.split('/')[2];
    const selectedBoardData = testData.find((el) => {
        return el._id === id;
    });

    return (
        <div>
            <Route exact path = '/'>
                <div className = 'board-components'> {BoardComponents}</div>
            </Route>
            <Route path = {`/board/:id`}>
                <Detail
                    boardData = {selectedBoardData}
                    setTestData = {() => {}}
                    setVisible = {setVisible}
                    />
            </Route>
            <button 
                className = 'open-button'
                onClick = {() => setVisible((state) => !state)}
            ></button>
            {visible ? (
                <Write 
                    boardData = {selectedBoardData}
                    setData = {() => {}}
                    setVisible = {setVisible}
                    fetchData = {fetchData}
                    />
            ) : null };
        </div>
    );

}

export default Main;