import {useState, useEffect} from 'react';
import axios from 'axios';


function CategoryInput({
    selectedCategory = null,
    setSelectedCategory,
    categoryFetch,
}) {
    const [inputValue, setInputValue] = useState(selectedCategory?.title ?? '');

    useEffect(() => {
        setInputValue(selectedCategory?.title?? '');
    }, [selectedCategory]);

//등록과 조회 때문에 post 방식으로 쓴다. 
    const addCategory = async() => {
    await axios.post(`${process.env.REACT_APP_API_SERVER}/api/category`, {
        title : inputValue,
    });
    categoryFetch();
};

const updateCategory  = async () => {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/api/category`, {
        _id : selectedCategory._id,
        title :inputValue,
    });
    categoryFetch();
};

const deleteCategory = async () => {
    await axios.delete(
        `${process.env.REACT_APP_API_SERVER}/api/category/${selectedCategory._id}`
    );
    setSelectedCategory(null);
    categoryFetch();
};

//카테고리 값이 잘못 들어가게 되면 
const cancelCategory = () => {
    setSelectedCategory(null);
};

if(!selectedCategory) {
    return (
        <div className = 'category-input'>
            <input
            type = 'text'
            value = {inputValue}
            onChange = {(e) => {
                setInputValue = (e.target.value);
            }}
            />
            <button onClick = {addCategory}>추가하기</button> 
        </div>
    )
}
return (
    <div className='category-input'>
    <input
      type = 'text'
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }} // e 에 input 입력 이벤트에 대한 정보가 있음.
    />
    <div className='button-wrapper'>
      <button onClick={updateCategory} className='green'>
        수정하기
      </button>
      <button onClick={deleteCategory} className='red'>
        삭제하기
      </button>
      <button onClick={cancelCategory}>취소하기</button>
    </div>
  </div>
);
}

export default CategoryInput;