const express = require('express');
const router =  express.Router();

const { board } = require('../../services');

const { listBoard, addBoard, getBoardById, updateBoard, deleteBoard } = board;



router.get('/', async (req, res) => {
  const boards = await listBoard();
  res.send(boards);
});


router.get('/id', async (req, res) => {
  const board = await getBoardById(Number(req.params.id));
  res.send(board);
});

router.post ('/', async (req, res) => {
  await addBoard({
    boardId : req.body.id,
    title: req.body.title,
    contents: req.body.contents,
    price: req.body.price,
    category: req.body.category, // 어떤 속성, 범주 안에 든다, 어떤 범위 ~sss
    imageLink: req.body.imageLink,
  });
  res.send('입력 완료 ');
});

router.put ('/', async (req, res) => {
  await updateBoard({
    boardId : req.body.id,
    title: req.body.title,
    contents: req.body.contents,
    price: req.body.price,
    category: req.body.category, // 어떤 속성, 범주 안에 든다, 어떤 범위 ~sss
    imageLink: req.body.imageLink,
  });
  res.send('수정완료 ');
});

router.delete('/id', async (req, res) => {
  await deleteBoard({boardId : board.params.id})
})

module.exports = router;

 //조회 하기 때문에 함수가 필요하다
/**
1.const board = await.listBorad
res.send('board');
 2. id를저장 
 //router.get('/:id' , async (req , res) => {
   const board = await getBoardById(req.params.id )
 })


post   
//router를 이용하는 방식으로 
//router.post('/', async (req, res) => {
  await addBoard ({
    리스트들을 추가하면된다. 
  })
})
 */