

function Content({content, setVisible}) {
    const updateBoardData  = () => {
        setVisible(true);
    };

    return  (
        <div className = 'detail-Content'>
            <div className = 'content-title'>글 내용</div>
            <div className = 'content-text'> {content}</div>

            <button onClick ={updateBoardData}> 수정!!</button>

        </div>
    );

}

export default Content; 