const BoardModel = require('../../models/board');

const listBoard = async () => {
    try {
        const boards = await BoardModel.find({}).exec();
        return boards;
    }catch (error) {
        console.log(error);
        return [];
    }
};

const getBoardById = async (boardId) => {
    try {
        const board = await BoardModel.findOne({id : boardId}).exec();
        return board;
    } catch(error) {
        console.log(error);
        return [];
    }
};

const addBoard = async ({ title, contents, price, category, imageLink }) => {
    try {
      await BoardModel.create({
        title,
        contents,
        price,
        category,
        imageLink,
      });
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  
  const updateBoard = async ({
    boardId,
    title,
    contents,
    price,
    category,
    imageLink,
  }) => {
    try {
      const query = { _id: boardId };
      await BoardModel.updateOne(query, {
        title,
        contents,
        price,
        category,
        imageLink,
      }).exec();
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  
  const deleteBoard = async ({ boardId }) => {
    try {
      const query = { _id: boardId };
      await BoardModel.deleteOne(query).exec();
    } catch (error) {
      console.error(error);
      return {};
    }
  };
  
  module.exports = {
    listBoard,
    getBoardById,
    addBoard,
    updateBoard,
    deleteBoard,
  };