import React, { useState, useEffect } from 'react';
import FormDataControl from './formDataControl';
import Loading from '../loading/loading';
import Success from './success';
import axios from 'axios';


export default function FormContainer() {
  // contains logic for processing api calls and getting initial data
  // from api for the form

  const [loading, setLoading] = useState(true);
  const [selectData, setSelectData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [successData, setSuccessData] = useState({});

  const url = 'http://localhost:49567';
  const config = {
      'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cache-Control': 'no-cache',
        }
  };

  useEffect(() => {
    // fetches service-type data
    getInitialData();
    },[]
  );

  useEffect(() => {
    // resets data when success changes to false
      if (success === false) {
          setSuccessData({});
      }

  }, [success])

  const getInitialData = async() => {
    // function for loading initial data from service-types for the form
    const serviceTypeUrl = `${url}/api/service-types`;
    try {
      const response = await axios.get(serviceTypeUrl, config);
      const data = response.data;
      setSelectData(data.data);
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
      if (response.status === 201) {
          setSuccessData(data.echo);
          setSuccess(true);
      }
    } catch(err) {
      alert('There was a problem contacting the server');
    }
  }

  if (!success) {
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
  else {
      return (
          <div>
            <Success {...successData}
                  back={() => setSuccess(false)} />
          </div>
      )
  }
}
