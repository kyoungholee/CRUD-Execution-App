import Write from "../Write";


function BoardList({ boardList, setSelectedBoard}) {
    const BoardListComponent = boardList.map((board) => {
        return (
            <Write 
                key = {board._id}
                onClick = {() => {
                    setSelectedBoard(board);
                }}
                title = {board.title}
                />
        );
    });

return (
    <div className = 'write-list'>
        <div className = 'category-list_title'> 중고거래 목록들</div>
        <button> {BoardListComponent}</button>
    </div>

);
}

export default BoardList;
