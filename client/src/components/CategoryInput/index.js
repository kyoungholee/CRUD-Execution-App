import axios from 'axios';
import {useEffect , useState} from 'react';
//   함수값을 받을때, 변경할떄 


function CategoryInput({
    selectedCategory = null,
    setSelectedCategory,
    categoryFetch,   //api 설정 해준거시다  
}) {
    const [inputValue, setInputValue] = useState(selectedCategory?.title ?? '');

    useEffect(() => { //명령형  어떤 effect를 발생하는 함수를 인자로 받는다. 
                //즉 값을 받는 형태이다. 
        setInputValue(selectedCategory?.title ?? '');
    }, [selectedCategory]);

      //axios의params값을 저장 한다 
    const addCategory = async () => {
        await axios.post(`${process.env.REACT_APP_API_SERVER}/api/category`, {
            title : inputValue,
        });
        categoryFetch();
    };

    const updateCategory = async () => { // 서버에 있는 api/category 를 말한다. 
        await axios.put(`${process.env.REACT_APP_API_SERVER}/api/category`, {
            _id : selectedCategory._id,
            title : inputValue,
        });
        categoryFetch();
    };

    const deleteCategory = async () => {
        await axios.delete(
            `${process.env.REACT_APP_API_SERVER}/api/category/${selectedCategory._id}, ${inputValue}`
        );
        setSelectedCategory(null);
        categoryFetch();
    };

    const cancelCategory = () => {
        setSelectedCategory(null);
    };

    if (!selectedCategory) {
        return (
            <div className = 'category-input'>
            <input
                type='text'
                value={inputValue}
                onChange = {(e) => {
                    setInputValue(e.target.value);
                }}
                />
                <button onClick = {addCategory}>추가하기</button> 
            </div>
        );
    }

    return (
        <div className = 'category-input'>
            <input
                type = 'text'
                value = {inputValue}
                onChange = {(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <div className = 'button-wrapper'>
                <button onClick = {updateCategory} className = 'green'>
                    수정하기
                </button>
                <button onClick = {updateCategory} className = 'red'>
                    삭제하기
                </button>
                <button onClick = {cancelCategory}>취소하기</button>
            </div>
        </div>
    );
}


export default CategoryInput;