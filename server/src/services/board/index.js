const BoardModel = require('../../models/board');

const listBoard = async () => {
  try {
    const boards  = await  BoardModel.find({}).exec();
    return boards;
  }
    catch(err){
      consol.log(err);
      retunr();
    }
  }
  const getBoardById = async ()  => {
    try {
      const board = await BoardModel.find({id : boardId}) .exec();
      
    } catch(err) {
      consol.log(err);
      return ();
    }
  }

  const addBoard = async ({title, category, price, contents, image}) => {
    try { 
      await BoardModel.create({
        title
        category
        image
        price 
        contents
      })

    } catch(err) {
        consol.log(err)
        return;
    }
  }

  const updateBoard = async ({
    리스트 들 

  }) => {
    try {
      const query = {id : boardId} 
      await BoardModel.updateOne(query, {
      }).exec(); 
    }catch () {
      consol.error(err);
      return {};
    }

  }
  const deleteBoard = async ({boardId}) => {
    try {
      await BoardModel.deleteOne(query).exec();

    } catch () {

    }
  }

  module.exports = {
    listBoard,
    getBoardById,
    addBoard,
    updateBoard,
    deleteBoard,
  };



  //list , get , add, update, delete 
  방식을 router에서 사용 할 수 있게 미리 
  서비스에서 기능들을 세팅하는 방식이다 ..!! 