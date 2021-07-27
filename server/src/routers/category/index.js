const express = require('express');
const router = express.router();

const category = require('../../services');

const {
  listCategory,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = category;



router.get ('/', async (req, res) => {
  const categories = await listCategory
  res.send(categories);
});

router.get ('/id', async (req, res) => {
  const category = await getCategoryById(Number(req.params.id));
  res.send(category);

});

router.post('/', async (req,res) => {
  await addCategory({
    ******

  });
  res.send("완료 ");
});

router.put('/', async (req, res) => {
  await updateCategory({
    리스트 ~~ 
  });
  res.send ("t")
})


router.delete('/', async (req, res) => {
  await deleteCategory({categoryId: req.params.id});
  res.send(wasd;wd;
  )
})
