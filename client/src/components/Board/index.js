function Board({
    title,
    category,
    time,
    price,
    user,
    imageLink,
    setBoardData,
})
{
    return (
        <div className="board" onClick = {setBoardData}>
            <div className = ''>

            </div>
            <div className = 'contents'>
                <div className = 'title'> {title}</div>
                <div className = 'category-time'>
                    <div className = 'category'>{category}</div>
                    <div className = 'time'> {time}</div>
                </div>
                <div className = 'money-user'>
                    <div className = 'money'> {price} 원</div>
                    <div className = 'user'> {user}</div>
                </div>
            </div>
        </div>
    );
}

export default Board;