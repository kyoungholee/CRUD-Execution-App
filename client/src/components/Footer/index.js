//리엑트에서 page를 이동 할 수 있는 이유는 react-router-dom를 이용하여 페이지를 기록하기 때문이다.
// 여기서 useHistory를 이용해서 페이지에 대한 이동 자유를 줄 수 있다. 

import React from 'react';

// 클릭시 앞, 뒤로 갈 수 있게 해줄 수 있는 기능이 있다.
import { useHistory } from 'react-router-dom';


function Footer() {
    const history = useHistory();
    const buttonList = [
        { title: '홈',  onClick: () => history.push('/') },
        { title: '검색', onClick: () => history.push('/search')},
        {
          title: '카테고리',
          color: 'yellow',
          onClick: () => history.push('/category'),
        },
        {
          title: '내글쓰기',
          color: 'green',
          onClick: () => history.push('/Writer'),
        },
    ];

    
    const Buttons = buttonList.map((el) => {
        return (
            <button
                className = 'footerButton'
                key = {el.title}
                onClick = {el.onClick}
                >
                {el.title}
                </button>
        );
    });
    return <div className = 'footer'>{Buttons}</div>

}

export default Footer; 