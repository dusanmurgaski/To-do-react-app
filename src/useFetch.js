import { useState, useEffect } from "react";


const useFetch = (url) => {
    let  [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(true);
    let [error, setError] = useState(null);
    
    useEffect(() =>{
        let abortCont = new AbortController();

    setTimeout(()=>{
        
        fetch(url,{signal: abortCont.signal})
        .then(res =>{
            if(!res.ok){
             throw Error("could not fetch data");
            }
            return res.json();
        })
        .then( ( data) =>{
             console.log(data);
             setData(data);
             setIsPending(false);
             setError(null);
        })
        .catch(err =>{
            if(err.name === "AbortError"){
                console.log("fetch aborted");
            } else{
                setIsPending(false);
                setError(err.message)
            }
           
        })
    },1)
    
     
        return () => abortCont.abort();
     
     }, [url] );
     return {data, isPending, error}
}

export default useFetch;