import React, { useState, useEffect } from 'react';
import FormControl from './formControl';
import Loading from '../loading/loading';

const sampleData = {
    "data": [
        {
            "display_name": "Benefits",
            "id": "benefits"
        },
        {
            "display_name": "Employment",
            "id": "employment"
        },
        {
            "display_name": "Healthcare",
            "id": "healthcare"
        },
        {
            "display_name": "Housing",
            "id": "housing"
        },
        {
            "display_name": "Legal",
            "id": "legal"
        }
    ]
}

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
  // fetch inital

  useEffect(() => {
    console.log('use effect fired');
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

  return (
    <div>
      {
        loading
        ? <Loading />
      : <FormControl data={ selectData }/>
      }

    </div>
  )
}
