import { useState, useEffect } from "react";

export const useFetch = url => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: false,
    });

    useEffect(() => {
        setState({ data: null, loading: true, error: false });

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const error = data.cod === 200 ? false : true;

                setState({
                    error: error,
                    loading: false,
                    data,
                });
            });
    }, [url]);

    

    return state;
};
