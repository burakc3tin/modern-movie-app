import React from 'react';
import './style.css';
import Card from '../../components/Card';
import CloseButton from '../../components/CloseButton';
import { useParams } from 'react-router-dom';

const Detail: React.FC = () => {
    const { id } = useParams<{ id: string }>();  

    return (
        <div className='main'>
            <CloseButton/>
            <Card id={id} />  
        </div>
    );
}

export default Detail;
