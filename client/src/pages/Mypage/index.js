import WriterList from '../../components/WriterList';
import WriterInput from '../../components/WriterInput';
import useApiCall from '../../hooks/useApiCall';
import { useState } from 'react';

function MyPage() {
    const [loading, error, writeData, fetchData] = useApiCall(
        `${process.env.REACT_APP_API_SERVER}/api/writer`
  );
  const [selectedWriter, setSelectedWriter] = useState(null);

  if(!writerData) {
      
  }