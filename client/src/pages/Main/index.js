import Board from '../../components/Board';
import Write from '../../components/Write';
import Detail from '../../components/Detail';
import { Route, useHistory, useLocation } from 'react-router';

import { useState } from 'react';
import useApiCall from '../../hooks/useApiCall';

function Main() {
    const history = useHistory(); //연결해주는 요소
    const location = useLocation(); //현재 머물러 있는 페이지에 대한 정보 
    const [loading, testData , error , fetchData] = useApiCall(
        `${process.env.REACT_APP_API_SERVER}/api/board`
    );

    const [visiable, serVisible] = useState(false);


    const id = location.pathname.split('/') [2];
    const selectedBoardData = testData.find(e)
}