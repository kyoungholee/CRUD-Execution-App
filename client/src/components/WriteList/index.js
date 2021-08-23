import Write from "../Write";


function WriteList({ writeList, setSelectedWrite}) {
    const WriteListComponent = writeList.map((write) => {
        return (
            <Write 
                key = {write._id}
                onClick = {() => {
                    setSelectedWrite(write);
                }}
                title = {write.title}
                />
        );
    });

return (
    <div className = 'write-list'>
        <div className = 'category-list_title'> 중고거래 목록들</div>
        <button> {WriteListComponent}</button>
    </div>

);
}

export default WriteList;
