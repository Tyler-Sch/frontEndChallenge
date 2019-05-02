import React, { useState, useEffect } from 'react';
import FormDataControl from './formDataControl';
import Loading from '../loading/loading';
import axios from 'axios';


export default function FormContainer() {
  // contains logic for processing api calls and getting initial data
  // from api for the form

  const [loading, setLoading] = useState(true);
  const [selectData, setSelectData] = useState([]);
  const url = 'http://localhost:49567';
  const config = {
      'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cache-Control': 'no-cache',
            'Host': 'localhost:49567'
        }
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
        console.log('trying get request')
      const response = await axios.get(serviceTypeUrl, config);
      const data = response.data;
      console.log('this is data'
      )
      console.log(response.data);
      setSelectData(data.data);
      console.log('setSelectData was called');
      setLoading(false);
    } catch(err) {
      alert('There was a problem fetching the initial data');
    }
  }

  const processPostRequest = async(requestData) => {
    const postUrl = `${url}/api/assistance-requests`;
    try {
      const response = await axios.post(
          postUrl,
          requestData,
          config
      )
      const data = await response.data;
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
      : <FormDataControl
          data={ selectData }
          processPostRequest={ processPostRequest }
        />
      }
    </div>
  )
}
