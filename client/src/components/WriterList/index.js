import Writer from '../Writer';

function WriterList({writerList, setSelectedWriter}) {
    const WriterListComponent = writerList.map((writer) => {
        return (
            <Writer
                key = {writer._id}
                onClick = {() => {
                    setSelectedWriter(writer);
                }}
                title = {writer.title}
                />
        );
    });
    
    return (
        <div className = 'writer-list'>
            <div className = 'writer-list_title'>글쓰기</div>
            {WriterListComponent}
        </div>
    );
}

export default WriterList;