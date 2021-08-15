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
      
      title,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
  };

  const updateBoardData = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/api/board`, {
    
      title,
      category,
      price,
      contents,
    });
    setVisible(false);
    fetchData();
    history.push('/');
  };

  const deleteBoardData = async () => {
    // 1. 삭제하기 api 호출
    await axios.delete(
      `${process.env.REACT_APP_API_SERVER}/api/board/${boardData._id}`
    );
    // 2. Write 안보이게 하기
    setVisible(false);
    // 3. fetchData 호출
    fetchData();
    // 4. boardData 를 null로 바꾼다. => main으로 간다.
    history.push('/');
  };
    return (
      <div
        className='write'
        onClick={(e) => {
          if ([...e.target?.classList].includes('write')) setVisible(false);
        }}
      >
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
            <button className='red' onClick={deleteBoardData}>
              삭제하기
            </button>
          </div>
        </div>
      </div>
    );
  }

export default Write;
