import { useEffect, useState } from 'react';
import './App.css';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import List from './Components/List';
import Pagination from './Components/Pagination';
import axios from 'axios';


function App() {

  const [pokelist , setPokelist] = useState([])
  const [currPageUrl , setCurrPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl , setNextPageUrl] = useState()
  const [prevPageUrl , setprevPageUrl] = useState()



  useEffect(() => {
    axios.get(currPageUrl)
      .then(response => {
        setPokelist(response.data.results)
        setNextPageUrl(response.data.next)
        setprevPageUrl(response.data.previous)
      })

  } , [currPageUrl])

  const goToNext = () => {
    setCurrPageUrl(nextPageUrl)
  }

  const goToPrevious = () => {
    setCurrPageUrl(prevPageUrl)
  }

  return (
    <>
      <Navbar />
      <List 
        pokelist={pokelist}
      />
      <Pagination 
        goToNext = {nextPageUrl == null ? null : goToNext}
        goToPrevious = {prevPageUrl == null ? null : goToPrevious}
      />
    </>
  );
}

export default App;
