import Category from '../Category';


function CategoryList({ categoryList, setSelectedCategory}) {
    const CategoryListComponent = categoryList.map((category) => {
        return (
            <Category
                key = {Category._id}
                onClick = {() => {
                    setSelectedCategory(category);
                }}
                title = {category.title}
                />
        );
    });
    return (
        <div className = 'category-list'>
            <div className = 'category-list_title'>카테고리
            {CategoryListComponent}</div>
        </div>
    );

}

export default CategoryList;