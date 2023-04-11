import React, { useEffect, useState } from 'react';
import './App.css';
import './Components/Navbar/navbar.css';
import './Components/rovers.css';
import Navigation from './Components/Navbar/navbar';
import Perseverance from './Components/Perseverance/perseverance';
import Curiosity from './Components/Curiosity/curiosity';
import Opportunity from './Components/Opportunity/opportunity';
import Spirit from './Components/Spirit/spirit';
import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import Pagination from './Components/Pagination';


function App() {
  const [photos, setPhotoData] = useState([]); 
  const [photos1, setPhotoData1] = useState([]); 
  const [photos2, setPhotoData2] = useState([]); 
  const [photos3, setPhotoData3] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(10);

  useEffect(() => {
      const fetchPhoto = async () => {
          setLoading(true);
          const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=UyWNPaVgw1pg6JGRCsP7LW9UcWa7guNnPaFz3ylA`)
          const res1 = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=UyWNPaVgw1pg6JGRCsP7LW9UcWa7guNnPaFz3ylA`)
          const res2 = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=UyWNPaVgw1pg6JGRCsP7LW9UcWa7guNnPaFz3ylA`)
          const res3 = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=UyWNPaVgw1pg6JGRCsP7LW9UcWa7guNnPaFz3ylA`)
          .catch((err) => {
              alert('I wish I could be of more use...Maybe try again later!', err);
          })
          setPhotoData(res.data.latest_photos);
          setPhotoData1(res1.data.latest_photos);
          setPhotoData2(res2.data.latest_photos);
          setPhotoData3(res3.data.latest_photos);
          setLoading(false);
          console.log(res)
      }
      fetchPhoto();
  },[])

  //Get current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhoto = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const currentPhoto1 = photos1.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const currentPhoto2 = photos2.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const currentPhoto3 = photos3.slice(indexOfFirstPhoto, indexOfLastPhoto);

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
 
    return (
      <div className='App'>
        <h1>Mars' Latest Images</h1>
        <Navigation/>
        <Routes>
          <Route path="/perseverance" element={<><Perseverance photos={currentPhoto} loading={loading}/><Pagination photosPerPage={photosPerPage} totalPhotos={photos.lenght} paginate={paginate}/></>}/>
          <Route path='/curiosity' element={<Curiosity photos1={currentPhoto1} loading={loading}/>}/>
          <Route path='/opportunity' element={<Opportunity photos2={currentPhoto2} loading={loading}/>}/>
          <Route path='/spirit' element={<Spirit photos3={currentPhoto3} loading={loading}/>}/>
        </Routes>
        <footer>Made by Hector for</footer>
      </div>
    );
  }

export default App;
