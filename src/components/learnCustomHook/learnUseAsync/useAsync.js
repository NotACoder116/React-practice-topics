import { useCallback, useEffect, useState } from 'react'

export const useAsync = (asyncCall, immediate = false) => {
  const [state, setState] = useState({
    status: 'idle',
    value: null,
    error: null
  });

  const refetchState = useCallback(() => {
    asyncCall().then(response => {
        setState({
            status: 'Success',
            value: response,
            error: null
        });
    })
    .catch(err => {
        setState({
            status: "Failure",
            value: null,
            error: err
        });
    });
  }, [asyncCall]);

  useEffect(() => {
    if (immediate) {
        refetchState();
    }
  }, [refetchState, immediate]);

  const { value, status, error } = state;

  return { refetchState, value, status, error };
}
