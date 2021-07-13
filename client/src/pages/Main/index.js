import Board from '../../components/Board';
import Write from '../../components/Write';
import Detail from '../../components/Detail';
import { Route, useHistory, useLocation } from 'react-router';

import './style.scss';

import { useState } from 'react';
import useApiCall from '../../hooks/useApiCall';


function Main () {
    const history = useHistory();
    const location = useLocation();
    const [loading, testDate , error, fetchDate] = useApiCall(
        `${process.env.REACT_APP_API_SERVER}/api/board`
    );

    const [visible, setVisible] = useState(false);

    if (!testDate) { 
        return<></>;
    }

    if(loading) {
        return<> 로딩중 ...</>;
    }

    if(error) {
        return <> 엘 : {error}</>;
    }

    const BoardComponents = testDate.map((boardData) => {
        return ( 
            <Board 
            key={boardData._id}
            title={boardData.title}
            category={boardData.category}
            time={boardData.time}
            price={boardData.price}
            user={boardDate.user}
            imageLink = {boardData.imageLink}
            setBoardData={() => {
                history.push(`/board/${boardData._id}`);
            }}
            />
        );
    });

    const id  = location.pathname.split('/')[2];
    const selectedBoardData = testData.find((el) => {
        return el._id === id;
    });


    return  ( 
        <div>
            <Route exact path='/'>
                <div className = 'board-components-wrapper'>
                    {BoardComponents}
                </div>
            </Route>
            <Route path = {`/board/: id`}>
                <Detail
                    boardData = {selectedBoardData}
                    setData={ () => {}}
                    setVisible = {setVisible}
                    fetchDate = {fetchDate}
                    />
            </Route>
            <button
                className="open-button"
                onClick = {() => setVisible((state) => !state)}
            ></button>
            {visible ? (
                <Write
                boardData = {selectedBoardData}
                setData={() => {}}
                setVisible = {setVisible}
                fetchDate = {fetchDate}
                />
            ) : null}
        </div>
    );
}

export default Main;