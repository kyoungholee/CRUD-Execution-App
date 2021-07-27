//카테코리에 있는 crud를 나타낸다. !!

const CategoryModel = require('../../models/category');

const listCategory = async () => {
  try {
    const categories = await CategoryModel.find({}).exec();
    return categories;
  } catch (err) {
    console.error(err);
    return [];
  }
};

try {
  const categories = await CategoryModel.find({}).exec();
  return categories;

} catch() {

}
const getCategoryById = async (categoryId) => {
  try {
    const category = await CategoryModel.findOne({ id: categoryId }).exec();
    return category;
  } catch (err) {
    console.error(err);
    return {};
  }
};

const addCategory = async ({***}) => {
 try {
   await CategoryModel.create({

   })
 } catch() {

 }
}

const addCategory = async ({ title }) => {
  try {
    await CategoryModel.create({
      title,
    });
  } catch (err) {
    console.error(err);
    return {};
  }
};

const updateCategory = async ({ categoryId, title }) => {
  try {
    const query  = {_id : categoryId};
    await CategoryModel.updateOne(query).exec();
  } catch() {

  }
};

const deleteCategory = async ({ categoryId }) => {
  try {
    const query = { _id: categoryId };
    await CategoryModel.deleteOne(query).exec();
  } catch (err) {
    console.error(err);
    return {};
  }
};

module.exports = {
  listCategory,
  const listCategory = 
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
};