import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import CameraTable from './Components/CameraTable/CameraTable';
import Pagination from './Components/Pagination/Pagination';
import Wobot from './Asset/Wobot.png'
import Filters from './Components/Filters/Filters';

function App() {
  const [cameraList, setCameraList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const [locationFilter, setLocationFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const uniqueLocations = [...new Set(cameraList.map(camera => camera.location))];

  useEffect(() => {
    const fetchCameras = async () => {
      try {
        const response = await fetch('https://api-app-staging.wobot.ai/app/v1/fetch/cameras', {
          headers: { Authorization: 'Bearer 4ApVMIn5sTxeW7GQ5VWeWiy' },
        });
        const result = await response.json();
        const data = result.data
        setCameraList(data);
      } catch (error) {
        console.error('Error fetching cameras:', error);
      }
    };
  
    fetchCameras();
  }, []);
  
  const countofList = cameraList.length
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = cameraList.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(cameraList.length / recordsPerPage)

  return (
    <div className="App">
      <img src={Wobot} alt='Wobot' height="30px" width="100px"></img>
      <div className='headWrapper'>
        <div className='headContent'>
          <h2>Cameras</h2>
          <p className='pTag'>Manage your cameras here.</p>
        </div>
        <div className='searchBar'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>
      <div className='filterStyle'><Filters setLocationFilter={setLocationFilter} setStatusFilter={setStatusFilter} uniqueLocations={uniqueLocations} /></div>
      <CameraTable cameraList={currentRecords} searchTerm={searchTerm} locationFilter={locationFilter} statusFilter={statusFilter} />
      <Pagination
      countofList ={countofList}
      indexOfFirstRecord = {indexOfFirstRecord}
      indexOfLastRecord = {indexOfLastRecord}
      nPages={nPages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
