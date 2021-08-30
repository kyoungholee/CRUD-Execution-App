import axios from 'axios';
import React, { useState } from 'react';
import Input from './Input';

import { useHistory } from 'react-router-dom';

function Write({ boardData, setVisible, fetchData }) {

  const [title, setTitle] = useState(boardData?.title || '');
  const [category, setCategory] = useState(boardData?.category || '');
  const [price, setPrice] = useState(boardData?.price || '');
  const [contents, setContents] = useState(boardData?.contents || '');
  const history = useHistory();

  const createBoardData = async () => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/api/board`, {
      title : setVisible,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
  };

  const updateBoardData = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/api/board`, { 
      // 어떤 걸 수정해야 될 지 알려주어야 함
      _id : boardData._id,
      title : setVisible,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
  };

  const deleteBoardData = async () => {
    // 1. 삭제하기 api 호출
    await axios.delete(
      `${process.env.REACT_APP_API_SERVER}/api/board/${boardData._id}`
    );
    // 2. Write 안보이게 하기
    // 3. fetchData 호출
    setVisible(null);
    fetchData();
    // 4. boardData 를 null로 바꾼다. => main으로 간다.

  };

  if (!boardData) {

    return (
      <div className='category-input'>
        <input
          type='text'
          value={setVisible}
          onChange={(e) => {
            setVisible(e.target.value);
          }} // e 에 input 입력 이벤트에 대한 정보가 있음.
        />
    
        <div className='inputs-wrapper'>
          <Input title={'글 제목'} value={title} setValue={setTitle} />

          <Input title={'카테고리'} value={category} setValue={setCategory} />
          <Input
            title={'가격'}
            value={price}
            setValue={setPrice}
            inputType={'number'}
          />
          <Input title={'글 내용'} value={contents} setValue={setContents} />
          <div className='button-wrapper'>
            <button className='green' onClick={createBoardData}>
              작성하기
            </button>
            <button
              className='red'
              onClick={() => {
                setVisible(null);
              }}
            >
              취소하기
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // 여기는 수정하기

    return (
        <div className='category-input'>
          <input
            type='text'
            value={setVisible}
            onChange={(e) => {
              setVisible(e.target.value);
            }} // e 에 input 입력 이벤트에 대한 정보가 있음.
          />
        <div className='inputs-wrapper'>
          <Input title={'글 제목'} value={title} setValue={setTitle} />

          <Input title={'카테고리'} value={category} setValue={setCategory} />
          <Input
            title={'가격'}
            value={price}
            setValue={setPrice}
            inputType={'number'}
          />
          <Input title={'글 내용'} value={contents} setValue={setContents} />
          <div className='button-wrapper'>
            <button className='green' onClick={updateBoardData}>
              수정하기
            </button>
            <button className='red' onClick={deleteBoardData}>
              삭제하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;