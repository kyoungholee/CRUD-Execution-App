import axios from 'axios';
import {useEffect , useState} from 'react';



function CategoryInput({
    selectedCategory = null,
    setSelectedCategory,
    categoryFetch,   //api 설정 해준거시다  
}) {
    const [inputValue, setInputValue] = useState(selectedCategory?.title ?? '');

    useEffect(() => {
        setInputValue(selectedCategory?.title ?? '');
    }, [selectedCategory]);

    
    const addCategory = async () => {
        await axios.post(`${process.env.REACT_APP_API_SERVER}/api/category`, {
            title : inputValue,
        });
        categoryFetch();
    };

    const updateCategory = async () => {
        await axios.put(`${process.env.REACT_APP_API_SERVER}/api/category`, {
            _id : selectedCategory._id,
            title : inputValue,
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





}
