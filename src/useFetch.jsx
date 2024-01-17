import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    async function fetchData(){
      try{
        const response=await fetch(url);
        const data=await response.json();
        setData(data);
        setLoading(false);
        console.log("rendered")
      }
      catch(err){console.log(err)}
    }
    fetchData();
  },[])
  const handleDelete = (id) => {
    const newData=data.filter(data=>data.id!=id);
    setData(newData);
  }
  return {data , loading ,handleDelete};
}
 
export default useFetch;