// 메인 글 쓰는 부분  ~~  board 부분 이다 .

import Board from '../../components/Board';
import Write from '../../components/Write';
import Detail from '../../components/Detail';
import { Route, useHistory, useLocation } from 'react-router';

import { useState } from 'react';
import useApiCall from '../../hooks/useApiCall';


function Main() {
  const history = useHistory();
  const location = useLocation(); // 현재 url에서 id값을 얻기 위해
 

  const [loading, testData, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/board`
  );

  const [visible, setVisible] = useState(false);

  if (!testData) {
    return <>찾고 있습니다. </>;
  }

  if (loading) {
    return <>로딩중...</>;
  }

  if (error) {
    return <>에러 : {error}</>;
  }

  const BoardComponents = testData.map((boardData) => {
    return (
      <Board
        key={boardData._id}
        title={boardData.title}
        category={boardData.category}
        time={boardData.time}
        price={boardData.price}
        user={boardData.user}
        setBoardData={() => {
          history.push(`/board/${boardData._id}`);
        }}
      />
    );
  });
  // 현재 url에서 id값을 얻음
  // location.pathname => /board/id값
  // .split('/') => ['', 'board', 'id값']
  // [2] => 'id값'
  const id = location.pathname.split('/')[2];
  const selectedBoardData = testData.find((el) => {
    return el._id === id;
  });

  return (
    <div>
      <Route exact path='/'>
        <div className='board-components-wrapper'>{BoardComponents}</div>
      </Route>
      <Route path={`/board/:id`}>
        <Detail
          boardData={selectedBoardData}
          setTestData={() => {}}
          setVisible={setVisible}
        />
      </Route>
      <button
        className='open-button'
        onClick={() => setVisible((state) => !state)}
      >

        카테고리 추가하기
      </button>
      
      {visible ? (
        <Write
          boardData={selectedBoardData}
          setData={() => {}}
          setVisible={setVisible}
          fetchData={fetchData}
        />
      ) : null}
    </div>
  );
}

export default Main;
