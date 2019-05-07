import React, { useState, useEffect, useLayoutEffect } from 'react';
import FormDataControl from './formDataControl';
import Loading from '../loading/loading';
import Success from './success';

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
  }, []
  );

  useEffect(() => {
    // resets data when success changes to false ie: when back button
    // from success screen is pushed
      if (success === false) {
          setSuccessData({});
      }

  }, [success])

  const getInitialData = async() => {
    // function for loading initial data from service-types for the form
    const serviceTypeUrl = `${url}/api/service-types`;
    try {
      const response = await fetch(
        serviceTypeUrl,
        {
          'method': 'GET',
          'headers': config.headers
        }
      );
      const data = await response.json();
      setSelectData(data.data);
      setLoading(false);
    } catch(err) {
      alert('There was a problem fetching the initial data');
    }
  }

  const processPostRequest = async (requestData) => {
    const postUrl = `${url}/api/assistance-requests`;
    const response = await fetch(
      postUrl,
      {
        'method': 'POST',
        'headers': config.headers,
        body: JSON.stringify(requestData)
      }
    );
    const data = await response.json();
    // handle what responses you might get

    // switch (response.status) {
    //   case 201:
    //     setSuccessData(data.echo);
    //     setSuccess(true);
    //     break;
    //   case 401:
    //     alert(data.message);
    //     throw new Error(401);
    //     break;
    //   case 500:
    //     alert(data.message);
    //     throw new Error(500);
    //     break;
    //   case 503:
    //     alert(data.message);
    //     throw new Error(503);
    //   default:
    //     alert('something unknown is going');
    //     break;
    // }
    if (response.status === 201) {
      setSuccessData(data.echo);
      setSuccess(true);
    }
    else {
      alert(data.message);
      throw new Error(response.status)
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
