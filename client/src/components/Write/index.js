    //작성하기 부분이다 ..
    import axios from 'react';
    import React, {useState} from 'react';
    import {useHistory} from 'react-router-dom';
    import Input from './Input';

    function Write({boardData, setVisible, fetchData,}) {

    //useState 와 useReduce를 같이 사용 ? 
        const [title, setTitle] = useState(boardData?.title || '');
        const [category, setCategory] = useState(boardData?.category || '');
        const [price, setPrice] = useState(boardData?.price || '');
        const [contents, setContents] = useState(boardData?.contents || '');
        const history = useHistory();

        const createBoardData = async() => {
            await axios.post (`${process.env.REACT_APP_API_SERVER}/api/board` , {
                title,
                category,
                price,
                contents,
            });
            setVisible(false);
            fetchData();
        };

        const updateBoardData = async() => {
            await axios.put (`${process.env.REACT_APP_API_SERVER}/api/board` , {
                //수정해야할 _id 목록을 알려준다. 
                _id : boardData._id,
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
            await axios.delete(
                `${process.env.REACT_APP_API_SERVER}/api/board/${boardData._id}`);

                //false값으로 설정해서 보이지 않게 한다. 
            setVisible(false);
            fetchData();
            history.push('/');
        };

        if (boardData === null) {
            return (
                <div 
                className = 'write'
                onClick = {() => {
                    setVisible(false);
                }}>


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
                    setVisible(false);
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
