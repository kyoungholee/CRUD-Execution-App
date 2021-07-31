import Board from '../Board';
import Content from '../Content';


function Detail ({boardData, setVisible}) {
    return (
        <div className = 'board-detail'>
            <Board
            title = {boardData.title}
            category = {boardData.category}
            price = {boardData.price}
            time = {boardData.time}
            user = {boardData.user}
            />
            <Content setVisible = {setVisible} content = {boardData.contents} /> 

        </div> 
    );

}

export default Detail;