import React from 'react';
import './style.css';
import Table from '../../components/Table';
import SearchBar from '../../components/SearchBar';
import Title from '../../components/Title';
import Pagination from '../../components/Pagination';
 
const Home: React.FC = () => {
 
  return (
    <div className='main'>
      <Title/>
      <SearchBar/>
        <Table/>
        <Pagination/>
    </div>
  );
}

export default Home;