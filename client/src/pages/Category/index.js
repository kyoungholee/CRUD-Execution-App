import CategoryList from '../../components/CategoryList';
import CategoryInput from '../../components/CategoryInput';
import useApiCall from '../../hooks/useApiCall';
import { Route, useHistory } from 'react-router';
import { useState } from 'react';


function CategoryPage() {
  const history = useHistory();


  const [loading, categoryData, error, fetchData] = useApiCall(
    `${process.env.REACT_APP_API_SERVER}/api/category`
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!categoryData) {
    // null일경우
    return <>찾고 있습니다. </>;
  }

  if (loading) {
    return <>로딩중</>;
  }

  if (error) {
    return <>{error}</>;
  }

  return (
    <div className='category-page'>
      <CategoryList
        categoryList={categoryData}
        categoryFetch={fetchData}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryInput
        categoryFetch={fetchData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Route exact path = '/'>
        <div className = 'category-page'>{CategoryPage}</div>
      </Route>
      <button className = 'open-button'
      onClick = {() => setSelectedCategory((state) => !state)}>

      목록 추가 
      </button>

    </div>
  );

}

export default CategoryPage;
