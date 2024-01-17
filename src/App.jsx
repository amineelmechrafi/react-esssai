import { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Product from './product'
import useFetch from './useFetch';
import {BrowserRouter , Route , Routes } from 'react-router-dom'


function App() {
  
  const {data:products , loading , handleDelete} =useFetch("http://localhost:8081/products");
  



  return (
    <>
  
     
    
     {loading && <h1>Loading products</h1>}
     {products && <Product products={products} handleDelete={handleDelete} />}
    
    </>
  )
}

export default App;
