

function Board({
    title,
    category,
    time, 
    price,
    user,
    setBoardData,
}) {
    return (
        <div className = 'board' onClick = {setBoardData}>
            <div className = 'title'>{title}</div>
            <div className = 'category-time'>
                <div className = 'category'> {category}</div>
                <div className = 'time'> {time}</div>
            </div>
            <div className = 'money'>
                <div className = 'price'> {price}원</div>
                <div className = 'user'> {user}</div>
            </div>
        </div>
    );
}

export default Board;
