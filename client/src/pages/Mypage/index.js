import WriterList from '../../components/WriterList';
import WriterInput from '../../components/WriterInput';
import useApiCall from '../../hooks/useApiCall';
import { useState } from 'react';

function MyPage() {
    const [loading, error, writeData, fetchData] = useApiCall(
        `${process.env.REACT_APP_API_SERVER}/api/writer`
  );
  const [selectedWriter, setSelectedWriter] = useState(
    `${process.env.REACT_APP_API_SERVER}/api/Writer`
  );

  const [visible, setVisible] = useState(false);

  if(!writeData) {
   return <>현재 찾고 있습니다. </>;
  }

  if (loading) {
      return <> 로딩중 </>;
  }
  if(error) {
      return <>에러 : {error} </>;
  }

  }

  export default MyPage;