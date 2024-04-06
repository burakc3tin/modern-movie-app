import React from 'react';
import './style.css';
import Table from '../../components/Table';
import SearchBar from '../../components/SearchBar';
 
const Home: React.FC = () => {
  return (
    <div className='main'>
      <SearchBar/>
        <Table/>
    </div>
  );
}

export default Home;