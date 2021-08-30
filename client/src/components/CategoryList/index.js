
import Category from '../Category';

function CategoryList({ categoryList, setSelectedCategory }) {
  const CategoryListComponent = categoryList.map((category) => {
    return (
      <Category
        key ={category._id}
        onClick={() => {
          setSelectedCategory(category);
        }}
        title={category.title}
      />
    );
  });
  return (
    <div className='category-list'>
      <div className='category-list__title'>카테고리 목록들 </div>
        <button>{CategoryListComponent}</button>
    </div>
  );
}

export default CategoryList;
