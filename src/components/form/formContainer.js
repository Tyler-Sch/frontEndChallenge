import React, { useState, useEffect } from 'react';
import FormControl from './formControl';
import Loading from '../loading/loading';


export default function FormContainer() {
  const [loading, setLoading] = useState(true);
  const [selectData, setSelectData] = useState([]);
  const url = 'http://localhost:49567';
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
    'Host': 'localhost:49567'
  };

  useEffect(() => {
    // fetches service-type data
    getInitialData();
    },[]
  );

  const getInitialData = async() => {
    const serviceTypeUrl = `${url}/api/service-types`;

    const response = await fetch(
      serviceTypeUrl,
      {
        'method': 'GET',
        headers
      }
    );
    const data = await response.json();
    setSelectData(data.data);
    setLoading(false);
  }

  const processPostRequest = async(requestData) => {
    const postUrl = `${url}/api/assistance-requests`;
    const response = await fetch(
      postUrl,
      {
        'method': 'POST',
        'body': JSON.stringify(requestData),
        headers
      }
    );
    const data = await response.json();
    // handle what responses you might get
    alert(data.message);
  }

  return (
    <div>
      {
        loading
        ? <Loading />
      : <FormControl
          data={ selectData }
          processPostRequest={ processPostRequest }
        />
      }
    </div>
  )
}
