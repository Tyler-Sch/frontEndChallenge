import React, { useState, useEffect } from 'react';
import FormControl from './formControl';
import Loading from '../loading/loading';


export default function FormContainer() {
  // contains logic for processing api calls and getting initial data
  // from api for the form

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
    // function for loading initial data from service-types for the form
    const serviceTypeUrl = `${url}/api/service-types`;

    try {
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
    } catch(err) {
      alert('There was a problem fetching the initial data');
    }
  }

  const processPostRequest = async(requestData) => {
    const postUrl = `${url}/api/assistance-requests`;
    try {
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
    } catch(err) {
      alert('There was a problem contacting the server');
    }
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
