import React, { useEffect, useState } from 'react';

export default function useHasText(val) {
  const [hasText, setHasText] = useState(false);

  useEffect(() => {
    console.log('use effect fired');
    if (val.length > 0) {
      setHasText(true);
    }
    else if (val.length === 0) {
      setHasText(false);
    }
  }, [val.length])
  return hasText;
}
